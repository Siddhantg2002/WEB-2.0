const onSubmit = async (data, login, setCredentialError, navigate) => {
    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: 'include',
        });
        const result = await response.json();

        if (response.ok) {
            login();
            navigate('/');
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error("Error:", error.message);
        setCredentialError(error.message)
    }
};
export {onSubmit}