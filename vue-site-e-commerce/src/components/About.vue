<template>
  <div class="about">
    <div>
      <h1 class="h1">- Our missions -</h1>
      <p class="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit
        reiciendis voluptatibus qui aspernatur soluta accusamus accusantium quia
        hic beatae, voluptate fuga. Eveniet facere ad earum velit rem odit est!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa
        praesentium provident saepe! Quos repellat doloribus consequuntur ad.
        Nobis quia consequuntur aut aperiam officia, impedit delectus eos iste a
        maiores?
      </p>
    </div>
    <div>
      <h1 class="h1">- About us -</h1>
      <p class="paragraph">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        voluptatibus nobis veritatis non vero, eligendi in magni hic harum sed
        illum amet quasi dicta et pariatur doloremque, facilis ullam deleniti!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
        voluptates quia voluptatibus reiciendis tenetur dicta veritatis quae
        eligendi similique? Nobis voluptate doloremque consectetur similique
        libero ab nemo deserunt veniam et.
      </p>
    </div>
    <h1 class="h1">- Our address -</h1>
    <div class="contact">
      <div class="contact__icon">
        <i class="fas fa-phone-square-alt"></i>
        <p>+337 69 79 51 89</p>
      </div>
      <div class="contact__icon">
        <i class="fas fa-at"></i>
        <p>duchoang2612yh@gmail.com</p>
        <p>yazidmerzak@gmail.com</p>
      </div>
      <div class="contact__icon">
        <i class="fas fa-home"></i>
        <p>42 rue Clément Perrot</p>
        <p>94400 Vitry-sur-Seine</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  width: 70%;
  height: 600px;
  background-color: rgba(128, 128, 128, 0.397);
  margin: 10px auto;
}

h1,
h2,
h3 {
  margin: 0 auto;
  text-align: center;
}

.paragraph {
  text-align: center;
}
.contact {
  display: flex;
  padding: 20px;
 
}

.contact__icon {
  display: inline-block;
  margin: 0 auto;
  
}
.fas {
  font-size: 40px;
  margin: 20px 0 0 0;
  /* display: inline-block; */
  
}
p {
  margin-top: 10px;
}
</style>
