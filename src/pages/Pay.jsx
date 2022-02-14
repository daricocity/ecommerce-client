const Pay = () => {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <button
                style={{
                    border: 'none',
                    width: '20px',
                    borderRadius: '5',
                    padding: '20px',
                    backgroundColor: '#000',
                    color: '#fff',
                    fontWeight: '600',
                    cursor: 'pointer'
                }}
            >
                Pay
            </button>
        </div>
    )
};

export default Pay;
