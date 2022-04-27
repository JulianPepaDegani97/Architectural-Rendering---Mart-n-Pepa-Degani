<template>
    <h1>About me</h1>
    <section class="about-me">
        
        <img class="img-fluid" :src="img" alt="Martín PD Photo">
      <article>
        <p>
          My name is Martín Pepa Degani, architecture student at the University
          of Buenos Aires, 26 years-old.
        </p>
        <p>
          I dedicate to the architectural representation with 3D and 2D models,
          in photorealistic renderings.
        </p>
      </article>
    </section>
</template>

<script>
export default {
    name: 'abouttext',
    props: {
        img: String
    }
}
</script>

<style lang="scss" scoped>
h2 {
    width: 100%;
    text-align: center;
    margin: auto;
}
    .about-me {
        display: flex;
        flex-wrap: wrap;
        .img-fluid {
            width: 350px;
        }
        article {
            text-align: justify;
            padding: 2rem;
        }
    }
</style>