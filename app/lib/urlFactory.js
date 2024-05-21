let protooPort = 4443;

if (window.location.hostname === 'aimstream.redlab.site')
	protooPort = 4443;

export function getProtooUrl({ roomId, peerId, consumerReplicas })
{
	const hostname = window.location.hostname;

	return `wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}&consumerReplicas=${consumerReplicas}`;
}
