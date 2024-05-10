const BASE_URL = 'https://dummyjson.com/users';

const fetchUsers = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

const searchUsers = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search?q=${query}`);
    if (!response.ok) {
      throw new Error('Failed to search users');
    }
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export { fetchUsers, searchUsers };
