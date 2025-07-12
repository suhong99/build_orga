import { useInfinityScrollSensor } from '../hooks/useInfinityScrollSensor';

interface InfinityScrollSpinnerProps {
	isFetching: boolean;
	hasNextPage: boolean;
	fetchNextPage: () => Promise<unknown>;
}

const InfinityScrollSpinner = ({ isFetching, hasNextPage, fetchNextPage }: InfinityScrollSpinnerProps) => {
	const { sensorRef } = useInfinityScrollSensor({ isFetching, hasNextPage, fetchNextPage });

	return (
		<div
			ref={sensorRef}
			className="w-6 h-6 border-2 border-t-transparent border-inverse-primary-main rounded-full animate-spin"
			role="status"
			aria-label="로딩 중"
		/>
	);
};

export default InfinityScrollSpinner;
