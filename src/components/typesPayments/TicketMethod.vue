<template>
  <div class="container">
    <h4 class="mt-0 text-muted left-align">Atenção:</h4>
    <div class="row mt-4">
      <!-- Primeiro retângulo -->
      <div class="col-md-4">
        <div class="text-center mb-3 rounded-border small-rectangle">
          <i class="bi bi-clock icon icon  text-muted"></i>
          <p>Boletos Levam até 3 dias úteis para serem compensados e então terem os produtos liberados.</p>
        </div>
      </div>
      <!-- Segundo retângulo -->
      <div class="col-md-4">
        <div class="text-center mb-3 rounded-border small-rectangle">
          <i class="bi bi-envelope-open icon  text-muted"></i>
          <p>Depois do pagamento, fique atento ao seu e-email para receber os dados de acesso ao produto (verifique também
            a caixa de SPAM)</p>
        </div>
      </div>
      <!-- Terceiro retângulo -->
      <div class="col-md-4">
        <div class="text-center mb-3 rounded-border small-rectangle">
          <i class="bi bi-calendar icon icon  text-muted"></i>
          <p>A cada renovação de assinatura enviaremos um novo boleto para que você possa pagar.Assim, vocêfica sempre em
            dia sem se preocupar.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentComponent",
};
</script>

<style>
/*.left-align {
  /*text-align: left !important;
}
 */

.rounded-border {
  border: 3px solid rgb(179, 179, 179);
  border-radius: 10px;
  padding: 10px;
}

.icon {
  font-size: 30px;
}


.small-rectangle {
  width: 100%;
  height: 90%;
  /* Defina o tamanho desejado para os retângulos */
  margin: 0 auto;
}</style>
