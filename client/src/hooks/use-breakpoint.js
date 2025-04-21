import { useState, useEffect } from 'react';
import { throttle } from 'lodash-es';

export const BreakpointsConfig = {
	largeDesktop: 1200,
	customerTouchScreenDevice: 1024,
	desktop: 960,
};

export const getDeviceBreakpoint = (width) => ({
	isMobile: width < BreakpointsConfig.desktop,
	isDesktop: width >= BreakpointsConfig.desktop,
	isLargeDesktop: width >= BreakpointsConfig.largeDesktop,
	isCustomerTouchScreenDevice:
		width >= BreakpointsConfig.customerTouchScreenDevice,
});

export const useBreakpoint = () => {
	const [breakpoint, setBreakpoint] = useState(
		getDeviceBreakpoint(window.innerWidth)
	);

	useEffect(() => {
		const handleResize = throttle(() => {
			setBreakpoint(getDeviceBreakpoint(window.innerWidth));
		}, 250);

		window.addEventListener('resize', handleResize);
		window.addEventListener('orientationchange', handleResize);

		return () => {
			window.addEventListener('resize', handleResize);
			window.addEventListener('orientationchange', handleResize);
		};
	}, []);

	return breakpoint;
};
