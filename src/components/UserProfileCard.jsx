import React { Component } from 'react';
import UserProfileCard from './UserProfileCard';

class UserProfileCard extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userImage: '',
            userBio: ''
        }
    }

    updateProfile = (e) => {
        this.setState({
            userName: e.target.value,
            userImage: e.target.value,
            userBio: e.target.value
        })
    }

    render() {
        const { userName, userImage, userBio } = this.state;

        return (
            <div className='user-profile-card'>
                <div className='profile-image'>
                    <img src={userImage} alt='User' />
                </div>
                <div className='profile-info'>
                    <h2>{userName}</h2>
                    <p>{userBio}</p>
            </div>
            <div className='profile-edit'>
                <input type='text' placeholder='User Name' value={userName} onChange={(e) => this.setState({ userName: e.target.value})} />
                <input type='text' placeholder='Image URL' value={userImage} onChange={(e) => this.setState({ userImage: e.target.value })} />
                <textarea placeholder='User Bio' value={userBio} onChange={(e) => this.setState({ userBio: e.target.value })} />
                <button onClick={this.updateProfile}>Update Profile</button>
            </div>
        </div>
        );
    }
}

export default UserProfileCard;

