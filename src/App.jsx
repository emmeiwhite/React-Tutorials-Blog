import img1 from './assets/salamino.jpg'
import img2 from './assets/margherita.jpg'
import img3 from './assets/focaccia.jpg'
import Card from './components/Card'

function App() {
  // Challenge-1: Create a reusable Card Component

  return (
    <>
      <h1>Mastering React | For Real World Applications</h1>

      {/* Section-1: Challenge-1 */}
      <section className="card-list">
        <Card
          img={img1}
          title="Title-1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum, illo beatae nemo voluptatum assumenda quasi eveniet eos itaque dolore nostrum, reiciendis earum. Natus, officia eum quis voluptate nam asperiores."
        />

        <Card
          img={img2}
          title="Title-2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum, illo beatae nemo voluptatum assumenda quasi eveniet eos itaque dolore nostrum, reiciendis earum. Natus, officia eum quis voluptate nam asperiores."
        />

        <Card
          img={img3}
          title="Title-3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum, illo beatae nemo voluptatum assumenda quasi eveniet eos itaque dolore nostrum, reiciendis earum. Natus, officia eum quis voluptate nam asperiores."
        />

        <Card
          img={img1}
          title="Title-1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum, illo beatae nemo voluptatum assumenda quasi eveniet eos itaque dolore nostrum, reiciendis earum. Natus, officia eum quis voluptate nam asperiores."
        />

        <Card
          img={img2}
          title="Title-2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum, illo beatae nemo voluptatum assumenda quasi eveniet eos itaque dolore nostrum, reiciendis earum. Natus, officia eum quis voluptate nam asperiores."
        />

        <Card
          img={img3}
          title="Title-3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum, illo beatae nemo voluptatum assumenda quasi eveniet eos itaque dolore nostrum, reiciendis earum. Natus, officia eum quis voluptate nam asperiores."
        />
      </section>
    </>
  )
}

export default App
