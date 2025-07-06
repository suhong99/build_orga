import { useInView } from 'framer-motion';
import { Ref, useEffect, useRef } from 'react';

interface InfinityScrollSensorProps {
	isFetching: boolean;
	hasNextPage: boolean;
	fetchNextPage: () => void;
}

export const useInfinityScrollSensor = ({
	isFetching,
	hasNextPage,
	fetchNextPage,
}: InfinityScrollSensorProps): { sensorRef: Ref<HTMLDivElement> } => {
	const sensorRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(sensorRef);

	useEffect(() => {
		if (!isFetching && hasNextPage && isInView) {
			fetchNextPage();
		}
	}, [isFetching, hasNextPage, isInView, fetchNextPage]);

	return { sensorRef };
};
