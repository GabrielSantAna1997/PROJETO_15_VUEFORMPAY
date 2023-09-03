export default {
    methods: {
        validateField(fieldName, regex, errorKey, validKey) {
            if (!regex.test(this.user[fieldName])) {
              this.erros[fieldName] = errorKey;
              this[validKey] = false;
            } else {
              this.erros[fieldName] = "";
              this[validKey] = true;
            }

            return {
                'valid': this[validKey],
                'message': this.erros[fieldName]
            }
          },
    }
}