import "./GetKey.css"

const GetKey = () => {
    localStorage.setItem('userRole', 'admin');
    localStorage.setItem('F1@g', 'Open Your Eyes!');
    localStorage.setItem('lastLogin', '2023-01-01T12:00:00Z');
    localStorage.setItem('theme', 'dark');
    localStorage.setItem('language', 'en_US');
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('unreadMessages', '5');
    localStorage.setItem('preferredCurrency', 'USD');
    const ijsr349E = process.env.REACT_APP_ENCRYPTED_KEY
    localStorage.setItem('DivID', '205');
    localStorage.setItem('Flag', ijsr349E)
    localStorage.setItem('AppVer', '1.0');
    




    return (<>
    <div className="hint-main">

    <h1 className="hint">The Aesthetic flag to the local vault is tucked away in the attic of your browser.</h1>
    <p className="hint1" style={{ display:'none' }}>I have done 128 cbc tests</p>



    </div>
        

    </>);
};

export default GetKey;