export const Conversation = ({data, active}) => {
    return(
        <div className={`conv-item ${active}`}>
            <div className="top">
                <div className="left">
                    <input type="checkbox" name="conv-select" id="select-1"/>
                    <div className="text">
                        <span className="name font-bold">Sarthak Mathur</span>
                        <span className="type">Facebook DM</span>
                    </div>
                </div>
                <div className="right">
                    <span className="time text-grey">10m</span>
                </div>
            </div>
            <div className="bottom">
                <span className="title text-sm font-bold">Awesome Product</span>
                <span className="last-text text-sm">Hey, I used your product and it was really good...</span>
            </div>
        </div>
    )
}