import client from "../config/config"

export const DailyastronomyPictures = async () => {
    return await client.get("apod");
}