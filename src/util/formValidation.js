export const isFormValid = (pattern, form) => {
    if(form == null)
        return 'Please, fill in all required fields.';
        
    for(let input of pattern) {
        let value = form[input.name];

        if(input.required && (value === '' || value == null)) {
            return 'Please, fill in all required fields.';
        }

        if(input.type === 'email' && !isValidEmail(value)) {
            return 'Please, provide a valid email address.';
        }
    }

    return null;
};

const isValidEmail = (value) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
};
