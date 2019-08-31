module.exports  = function (err, req, resp, next){
    
        err.toJSON = () =>{
            return {
                message: err.message
            }
        }
        switch (err.name) {
            case 'ValidationError':
                const messages = [];
    
                for (let name in err.errors) {
                    messages.push({message: err.errors[name].message})
                }
    
                err.toJSON = () =>({
                    message: 'Validation error while processing your request',
                    errors: messages
                })
    
                break;
        }
    
        resp.status(400).send(err)
}

