import { Navbar } from "@/components/Navbar";
import { Sidebar } from "../sidebar/Sidebar";
import "./settings.scss";

export function Settings() {
    return (
        <div className="settings">
            <Navbar />
            <div className="content">
                <Sidebar />
                <div className="leaveOrg">
                    <label htmlFor="name">My Organizations</label>
                    <input type="text" name="name" placeholder="Emmy`s Team" />
                    <button>Leave Organization</button>
                    
                </div>
                
            </div>
        </div>
    )
}