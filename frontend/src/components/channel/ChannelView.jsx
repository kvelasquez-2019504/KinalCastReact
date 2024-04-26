//react tiene un hook, para obtener un req.param
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactFlvPlayer } from "react-flv-player";
import { useChannelDetails } from "../../shared/hooks";
import { LoadingSpinner } from '../LoadingSpinner';
import { ChannelDescription } from "./ChannelDescription";

export const Stream = ({ streamUrl }) => {
    //el streamUrl viene del backend
    return (
        <div className="channel-video-container">
            <ReactFlvPlayer width='100%' height="100%" url={streamUrl} />
        </div>
    )
}

export const ChannelView = ({ getChannels }) => {
    const { isFetching, getChannelDetails, channelDetails } = useChannelDetails();
    const { id } = useParams();
    useEffect(() => {
        getChannelDetails(id)
    }, []);
    //el [] son dependencias, pero como no usamos se manda vacio
    if (isFetching) {
        return <LoadingSpinner />
    }

    return (
        <div className="channel-container">
            <div className="channel-video-description-section">
                {channelDetails.data.isOnline ? (
                    <Stream streamUrl={channelDetails.data.streamUrl} />
                ) : (
                    <div className="channel-offline-placeholder">
                        <span>Channel is offline </span>
                    </div>
                )
                }
                <ChannelDescription
                    channelId={channelDetails.data.id}
                    title={channelDetails.data.title}
                    description={channelDetails.data.description}
                    username={channelDetails.data.username}
                    getChannels={getChannels}
                />
            </div>
        </div>
    )
}