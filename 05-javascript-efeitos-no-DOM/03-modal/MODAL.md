# CRIAÇÃO DE UM MODAL

Geralmente é criado primeiramente o **html** do modal, esse html é criado logo após a tag footer.

## HMTL
````html
    <!-- MODAL INICIO -->
    <section class="modal-container">
      <div class="modal">
        <button data-modal="fechar" class="fechar">X</button>
        <form action="">
          <label for="email">Email</label>
          <input type="text" for="email" id="email">
          <label for="senhamail">Senha</label>
          <input type="password" for="senha" id="senha">
          <button type="submit">Entrar</button>
        </form>
      </div>
    </section>
    <!-- MODAL FIM -->
````

## CSS
````css
.modal-container{
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; /*posição fixa*/
  top: 0;
  left: 0;
  z-index: 2000;
  
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal{
  min-width: 300px;
  background: #ffffff;
  padding: 40px;
  border: 10px solid #FB5;
  box-shadow: 0 0 0 10px #ffffff;
  position: relative; /*Para posicionar o X dentro da propria div*/
}

.fechar{
  position: absolute; /*posicionamento absoluto em relação ao modal*/
  top: -30px;
  right: -30px;
  width: 50px;
  height: 50px;
  border: 4px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
  background: #e54;
  font-size: 1.2em;
  color: #ffffff;
  cursor: pointer;
}

.modal label{
  display: block;
  font-weight: bold;
  margin: 16px 0 8px 0;
}

.modal input{
  width: 100%;
  padding: 10px 8px;
}

.modal button[type="submit"]{
  display: block;
  background: #e54;
  border: none;
  border-radius: 4px;
  padding: 10px 32px;
  font-size: 1em;
  color: #ffffff;
  margin-top: 16px;
  font-weight: bold;
  cursor: pointer;
}
````
## ADICIONANDO A ANIMAÇÃO

````css
.modal-container.active{
  display: flex;
}

.active .modal{
  animation: showModal 0.3s forwards;
}

@keyframes showModal{
  from{
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }

  to{
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
````

````js

````