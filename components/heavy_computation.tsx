const iterations = 10000000000
const results = []

export default function HeavyComputation() {
    const startHeavyComputation = () => {
        for (let i = 0; i < iterations; i++) {
            const result = Math.sqrt(i) * Math.sin(i)
            if (i % (iterations / 10) === 0) {
                results.push(result)
            }
        }
    }

    startHeavyComputation()

    return (
        <>
            <h1>Heavy Computation</h1>
            <p>Results: {results.join(', ')}</p>
        </>
    )
}