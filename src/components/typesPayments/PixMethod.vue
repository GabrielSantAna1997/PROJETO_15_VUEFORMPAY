<template>
  <div class="container">
    <h4 class="text-center mt-0 text-muted">Libere sua compra rapidamente pagando com o Pix!</h4>
    <div class="row mt-4">
      <!-- Primeiro retângulo -->
      <div class="col-md-6">
        <div class="text-center mb-3 rounded-border small-rectangle">
          <i class="bi bi-clock icon"></i>
          <h4 class="mt-2 bold-class">Rápida aprovação</h4>
          <p>Pagamento em segundos, sem complicação.</p>
        </div>
      </div>
      <!-- Segundo retângulo -->
      <div class="col-md-6">
        <div class="text-center mb-3 rounded-border small-rectangle">
          <i class="bi bi-qr-code icon"></i>
          <h4 class="mt-2 bold-class">Facilidade na finalização</h4>
          <p>Basta escanear, com o aplicativo do seu banco, o QRCode que iremos gerar para sua compra.</p>
        </div>
      </div>
      <!-- Terceiro retângulo -->
      <div class="col-md-6">
        <div class="text-center mb-3 rounded-border small-rectangle">
          <i class="bi bi-shield icon"></i>
          <h4 class="mt-2 bold-class">Maior segurança</h4>
          <p>O PIX foi desenvolvido pelo Banco Central para facilitar suas compras e é 100% seguro.</p>
        </div>
      </div>
      <!-- Quarto retângulo -->
      <div class="col-md-6">
        <div class="text-center mb-3 rounded-border small-rectangle">
          <i class="bi bi-calendar icon"></i>
          <h4 class="mt-2 bold-class">Tranquilidade na renovação</h4>
          <p>A cada renovação da assinatura enviaremos um código PIX. Assim, fica sempre em dia sem se preocupar.</p>
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
  /* Classe para adicionar bordas arredondadas aos retângulos */
  .rounded-border {
    border: 3px solid rgb(179, 179, 179);
    border-radius: 10px;
    padding: 10px;
  }

  .icon {
    font-size: 30px; /* Tamanho em pixels para os ícones */
  }

  /* Estilo personalizado para controlar o tamanho dos retângulos */
  .small-rectangle {
    width: 100%;
    height: 90%; /* Defina o tamanho desejado para os retângulos */
    margin: 0 auto; /* Centraliza os retângulos horizontalmente */
  }
</style>
