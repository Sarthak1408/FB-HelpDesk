import {Conversation} from "../components/Conversation";

export const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                {/*  Sidebar  */}
                <aside className="bg-blue">
                    <ul className="menu-list">
                        <li title="Home">
                            <img src="/assets/dashboard/rp_logo.png" alt="Richpanel Logo"/>
                        </li>
                        <li title="Conversations">
                            <i className="fa-solid fa-inbox"/>
                        </li>
                        <li title="Users">
                            <i className="fa-solid fa-users"/>
                        </li>
                        <li title="Statistics">
                            <i className="fa-solid fa-chart-line"/>
                        </li>
                    </ul>
                    <div className="profile">
                        <span className="status"/>
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Image"/>
                    </div>
                </aside>
                {/*  Sidebar End  */}
                {/*  Conversations  */}
                <div className="conversation">
                    <div className="chat-list">
                        <header className="header-pad">
                            <div className="left">
                                <i className="fa-solid fa-bars text-grey"/>
                                <span className="font-bold head-sm">Conversations</span>
                            </div>
                            <div className="right">
                                <i className="fa-solid fa-rotate-right head-sm text-grey"/>
                            </div>
                        </header>
                        <div className="list-flex">
                            <Conversation active="active"/>
                            <Conversation/>
                            <Conversation/>
                        </div>
                    </div>
                    <div className="chat">
                        <header className="header-pad">
                            <span className="name head-sm font-bold">Sarthak Mathur</span>
                        </header>
                        <div className="chat-box container">
                            <div className="message-box">

                            </div>
                            <div className="message-input">
                                <input type="text" className="grey-border rounded-10" name="message" id="message" placeholder="Message User"/>
                            </div>
                        </div>
                    </div>
                    <div className="user-profile">
                        <div className="profile">
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Profile" className="profile-img"/>
                            <div className="name-status">
                                <span className="name font-bold">Sarthak Mathur</span>
                                <div className="status">
                                    <span className="icon"/>
                                    <span className="status-text">Online</span>
                                </div>
                            </div>
                            <div className="options">
                                <button className="button-sm bg-white grey-border"><i className="fa-solid fa-phone"/> Call</button>
                                <button className="button-sm bg-white grey-border"><i className="fa-solid fa-user"/> Profile</button>
                            </div>
                        </div>
                        <div className="user-details">
                            <div className="detail-card rounded-10 grey-border">
                                <span className="text-lg font-bold">Customer Details</span>
                                <div className="details">
                                    <div className="detail-item">
                                        <span className="name text-grey">Email</span>
                                        <span className="value font-bold">sarthak@abc.com</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="name text-grey">First Name</span>
                                        <span className="value font-bold">Sarthak</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="name text-grey">Last Name</span>
                                        <span className="value font-bold">Mathur</span>
                                    </div>
                                </div>
                                <a href="#" className="font-bold">View more details</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Conversations End  */}
            </div>
        </>
    )
}