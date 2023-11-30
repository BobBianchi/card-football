export default function RollBox({ result }) {
    return (
        <div
            style={{
                border: "1px solid black",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h3>{result}</h3>
        </div>
    );
}
