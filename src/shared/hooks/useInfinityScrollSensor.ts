import { useInView } from 'framer-motion';
import { Ref, useEffect, useRef } from 'react';

interface InfinityScrollSensorProps {
	isFetching: boolean;
	hasNextPage: boolean;
	fetchNextPage: () => Promise<unknown>;
}

export const useInfinityScrollSensor = ({
	isFetching,
	hasNextPage,
	fetchNextPage,
}: InfinityScrollSensorProps): { sensorRef: Ref<HTMLDivElement> } => {
	const sensorRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(sensorRef);

	const lockRef = useRef(false);

	useEffect(() => {
		if (!isFetching && hasNextPage && isInView) {
			if (lockRef.current) return;
			lockRef.current = true;

			(async () => {
				try {
					await fetchNextPage();
				} finally {
					setTimeout(() => {
						lockRef.current = false;
					}, 300);
				}
			})();
		}
	}, [isFetching, hasNextPage, isInView, fetchNextPage]);

	return { sensorRef };
};
