
import "./settings.scss";

export function Settings() {
    return (
        <div className="settings">
            <div className="content">
                <div className="leaveOrg">
                    <label htmlFor="name">My Organizations</label>
                    <input type="text" name="name" placeholder="Emmy`s Team" />
                    <button>Leave Organization</button>
                    
                </div>
                
            </div>
        </div>
    )
}