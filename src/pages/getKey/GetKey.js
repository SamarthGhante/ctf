import "./GetKey.css"

const GetKey = () => {
    localStorage.setItem('userRole', 'admin');
    localStorage.setItem('F1ag', 'Open Your Eyes!');
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

    <h1 className="hint">A Courrpt AI Agent and Its Army of 128 Aesthetic Looking Robots Are Heading Towards Local Vault of the City of Dawn!</h1>
    <p className="hint1" style={{ display:'none' }}>Genome Code of Agents: 128 CBC</p>

    </div>
        

    </>);
};

export default GetKey;