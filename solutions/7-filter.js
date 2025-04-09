// BEGIN
const getGirlFriends = (users) => {
    const friends = users.reduce((acc, user) => acc.concat(user.friends), []);
    
    return friends.filter((friend) => friend.gender === 'female');
};

export default getGirlFriends;
// END
