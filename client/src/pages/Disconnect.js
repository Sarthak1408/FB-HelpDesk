export const Disconnect = () => {
    return(
        <>
            <div className="disconnect center-grid bg-blue container">
                <div className="card">
                    <div className="head-sm">Facebook Page Integration</div>
                    <div className="text-lg">Integrated Page: <span className="font-bold">RichPanel</span></div>
                    <button className="button-lg bg-red text-white w-100">Delete Integration</button>
                    <button className="button-lg bg-blue text-white w-100">Reply to messages</button>
                </div>
            </div>
        </>
    )
}