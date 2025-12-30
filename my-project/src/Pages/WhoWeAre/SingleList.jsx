

const SingleList = ({ list }) => {


    return (
        <div>
            <div className="text-4xl text-primary">
                <img className="w-16 h-16" src={list.icon} alt="" />
            </div>
            <div>
                <h2>{list.count}</h2>
                <h2>{list.label}</h2>
            </div>
        </div>
    );
};

export default SingleList;