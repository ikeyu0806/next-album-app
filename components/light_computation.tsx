const iterations = 1
const results = []

export default function HeavyComputation() {
  const startHeavyComputation = () => {
    for (let i = 0; i < iterations; i++) {
      results.push(i)
    }
  }

  startHeavyComputation()

  return (
    <>
      <h1>Light Computation</h1>
      {/* <p>Results: {results.join(', ')}</p> */}
    </>
  )
}
