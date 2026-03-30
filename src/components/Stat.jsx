import React from 'react'

function Stat() {
    return (
        <div className=" text-white flex  stats-vertical md:stats-horizontal shadow bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            <div className="stat text-center">
               
                <div className="stat-value">50K+</div>
                <div ><p>Active Users</p></div>
            </div>

            <div className="stat text-center">
                
                <div className="stat-value">200+</div>
                <div >Premium Tools</div>
            </div>

            <div className="stat text-center">
             
                <div className="stat-value">4.9</div>
                <div >Rating</div>
            </div>
        </div>
    )
}

export default Stat