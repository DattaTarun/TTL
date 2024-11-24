import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

// Students API
export const getAllStudents = async () => {
    const response = await axios.get(`${API_BASE_URL}/students`);
    return response.data;
};

// Mentors API
export const getAllMentors = async () => {
    const response = await axios.get(`${API_BASE_URL}/mentors`);
    return response.data;
};

// Skills API
export const getAllSkills = async () => {
    const response = await axios.get(`${API_BASE_URL}/skills`);
    return response.data;
};

// Hackathons API
export const getAllHackathons = async () => {
    const response = await axios.get(`${API_BASE_URL}/hackathons`);
    return response.data;
};

// Communities API
export const getAllCommunities = async () => {
    const response = await axios.get(`${API_BASE_URL}/communities`);
    return response.data;
};

// Projects API
export const getAllProjects = async () => {
    const response = await axios.get(`${API_BASE_URL}/projects`);
    return response.data;
};
