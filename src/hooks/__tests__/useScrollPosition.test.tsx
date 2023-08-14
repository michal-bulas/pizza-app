import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { useScrollPosition } from '../useScrollPosition';

const TestComponent: React.FC = () => {
	const scrollPosition = useScrollPosition();
	return <span data-testid='scrollPosition'>{scrollPosition}</span>;
};

describe('useScrollPosition', () => {
	let scrollY = 0;

	Object.defineProperty(window, 'pageYOffset', {
		get() {
			return scrollY;
		},
	});

	const fireScroll = (y: number) => {
		scrollY = y;
		window.dispatchEvent(new Event('scroll'));
	};

	it('initially returns a scroll position of 0', () => {
		render(<TestComponent />);
		expect(screen.getByTestId('scrollPosition').textContent).toBe('0');
	});

	it('updates the scroll position when the window is scrolled', () => {
		render(<TestComponent />);
		act(() => {
			fireScroll(100);
		});
		expect(screen.getByTestId('scrollPosition').textContent).toBe('100');
	});
});
