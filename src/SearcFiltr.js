import React from 'react'

export const SearcFiltr = () => {
    return (
        <div>
            <form>
                <div className="MID">
                    <input type="checkbox" /><label for="username">Username</label><br/>
                    <input type="checkbox" /><label for="MID">MID</label><br/>
                    <input type="checkbox" /><label for="email">Email</label><br/>
                    <input type="checkbox" /><label for="Division">Division</label>
                </div>
            </form>
        </div>
    )
}
export default SearcFiltr;