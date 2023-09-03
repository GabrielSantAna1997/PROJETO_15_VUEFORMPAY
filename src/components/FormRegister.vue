<template>
    <div class="container mt-5 ">
        <div class="card ">
            <form class="row no-gutters align-items-center" @submit.prevent="enviarFormulario">
                <div class="card-body">
                    <div class="mb-4 custom-margin">
                        <label for="nome" class="form-label bold-class">Nome Completo</label>
                        <input type="text" class="form-control" placeholder="Digite seu nome completo"
                            v-model="user.fullName"  @blur="validarName" ref="fullNameInput"/>
                        <span class="text-danger">{{ erros.fullName }}</span>
                    </div>
                    <div class="row">
                        <div class="mb-3 col-md-5 custom-margin">
                            <label class="form-label bold-class">E-mail</label>
                            <input type="email" class="form-control" placeholder="Digite seu email" v-model="user.email"
                                @blur="validarEmail" />
                            <span class="text-danger">{{ erros.email }}</span>
                        </div>
                        <div class="mb-3 col-md-5 custom-margin">
                            <label class="form-label bold-class">Telefone</label>
                            <input type="number" class="form-control" placeholder="Digite seu telephone"
                                v-model.number="user.telephone" @blur="validateTelephone" />

                            <span class="text-danger">{{ erros.telephone }}</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import minins from './minins';
import { mapMutations } from 'vuex';

export default {
    mixins: [minins],
    data() {
        return {
            user: {
                fullName: '',
                email: '',
                telephone: ''
            },
            fullNameValid: false,
            emailValid: false,
            telephoneValid: false,
            erros: {
                fullName: "",
                email: "",
                telephone: "",
            }
        };
    },
    mounted() {
        this.$refs.fullNameInput.focus();
    },
    methods: {
        ...mapMutations(['updateValidForm']),
        validarName() {
            this.AddToCart()
        },
        validarEmail() {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const validator = this.validateField("email", emailRegex, "E-mail inválido", "emailValid")
    
            if(validator.valid){
                this.emailValid = validator.valid;
            }else{
                this.erros.email = "E-mail inválido";
                this.emailValid = validator.valid;
            }

            this.AddToCart()
        },
        validateTelephone() {
            const telefoneRegex = /^\d{11}$/;
            const validator = this.validateField("telephone", telefoneRegex, "Telefone inválido", "telephoneValid")

            if(validator.valid){
                this.emailValid = validator.valid;
            }else{
                this.erros.telephone = "Telefone inválido";
                this.emailValid = validator.valid;
            }

            this.AddToCart()
        },
        AddToCart() {
            const userEmail = this.user.fullName && this.user.email;
            const nameTelephone =  this.user.fullName && this.user.telephone;
            

            if(userEmail || nameTelephone){
                console.log('ADD TO CAR') 
                this.updateValidForm(true)
            }else{
                this.updateValidForm(false)
            }
        }
    },
};
</script>
  

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
}

.card-body {
    text-align: left;
    margin-left: 2%;
}

.bold-class {
    font-weight: bold;
}

.custom-margin{
    margin-left: 30px; 
    margin-right: 30px; 
}


</style>
