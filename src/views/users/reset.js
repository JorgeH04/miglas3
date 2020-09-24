<% include ../partials/_header %>



<div class="containerr">
    <form action="/passwordForgot/<%= User.resetPasswordToken %>" method="POST">
       <h2>Cambiar Contraseña</h2>
       <h3></h3>
       <hr id="top-hr">
      
        <input type="password" name="resetPassword"  class="ui"  placeholder="&#xf0e0 Contraseña">
        <input type="password" name="repeatresetPassword" class="ui"  placeholder="&#xf023 Repetir contraseña">

        <input type="submit" class="ui"  value="Enviar" id="log">


     </form>

  </div>


<% include ../partials/_footer %>
