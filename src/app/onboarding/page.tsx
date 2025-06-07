import { Metadata } from 'next';
import OnboardingForm from '@/features/onboarding/OnboardingForm';

export const metadata: Metadata = {
	title: '온보딩 페이지',
};

export default function OnboardingPage() {
	return (
		<div className="w-full px-5 desktop:pt-16">
			<OnboardingForm />
		</div>
	);
}
