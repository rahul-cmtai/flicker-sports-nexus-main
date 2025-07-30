import React from 'react';
import { Star, Quote } from 'lucide-react';

// Split testimonials into two rows
const testimonials = [
	{
		name: 'Dr. Rajesh Kumar',
		position: 'Sports Director',
		organization: 'All India Sports Academy',
		rating: 5,
		comment:
			'Flicker Sports has transformed our academy with their premium equipment. The basketball courts and gymnasium setup exceeded our expectations. Quality is unmatched!',
		avatar:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
	},
	{
		name: 'Sarah Mitchell',
		position: 'Athletic Director',
		organization: 'International School Dubai',
		rating: 5,
		comment:
			'We have been using Flicker Sports equipment for 3 years now. Their badminton courts and tennis facilities are world-class. Excellent durability and performance.',
		avatar:
			'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=100&h=100&fit=crop&crop=face',
	},
	{
		name: 'Coach Michael Chen',
		position: 'Head Coach',
		organization: 'Singapore Sports Club',
		rating: 5,
		comment:
			'The football equipment and outdoor gym setup from Flicker Sports has greatly enhanced our training programs. Athletes love the professional-grade quality.',
		avatar:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
	},
	{
		name: 'Emma Thompson',
		position: 'Facility Manager',
		organization: 'London Recreation Centre',
		rating: 5,
		comment:
			'Outstanding service and premium products! The table tennis and pool table installations were seamless. Their international shipping was very professional.',
		avatar:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
	},
	// New testimonials
	{
		name: 'Amit Sharma',
		position: 'PE Teacher',
		organization: 'Delhi Public School',
		rating: 5,
		comment:
			'Flicker Sports ki service bahut acchi hai. Basketball court installation time pe hua aur quality bhi best hai.',
		avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
	{
		name: 'Lisa Wong',
		position: 'Sports Coordinator',
		organization: 'Hong Kong Sports Academy',
		rating: 5,
		comment:
			'Their badminton flooring is top-notch. Highly recommended for any sports facility!',
		avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
	},
];

const half = Math.ceil(testimonials.length / 2);
const row1 = testimonials.slice(0, half);
const row2 = testimonials.slice(half);

const TestimonialCard = ({
	testimonial,
}: {
	testimonial: typeof testimonials[0];
}) => (
	<div className="
        min-w-[180px] max-w-[210px] mx-1
        bg-card rounded-xl p-1.5 border border-border relative shadow flex flex-col items-center
        h-[90px] justify-between
        sm:min-w-[380px] sm:max-w-md sm:mx-4 sm:rounded-2xl sm:p-4 sm:h-[180px]
    ">
		<div className="absolute top-0.5 left-0.5 sm:top-2 sm:left-2">
			<Quote className="w-3 h-3 text-accent/30 sm:w-5 sm:h-5" />
		</div>

		<blockquote className="text-[10px] text-foreground text-center mb-0.5 leading-tight font-medium line-clamp-3 sm:text-sm sm:mb-2 sm:leading-snug">
			"{testimonial.comment}"
		</blockquote>
		<div className="flex items-center gap-1 mt-0.5 sm:gap-3 sm:mt-2">
			<img
				src={testimonial.avatar}
				alt={testimonial.name}
				className="w-5 h-5 rounded-full object-cover border border-accent/20 sm:w-10 sm:h-10 sm:border-2"
			/>
			<div className="flex flex-col items-start">
				<h4 className="text-[10px] font-semibold text-secondary sm:text-sm">
					{testimonial.name}
				</h4>
				<p className="text-primary text-[8px] sm:text-xs">
					{testimonial.position}
				</p>
				<p className="text-foreground text-[7px] sm:text-[11px]">
					{testimonial.organization}
				</p>
			</div>
			<div className="flex items-center mb-0.5 sm:mb-1">
				{[...Array(testimonial.rating)].map((_, i) => (
					<Star
						key={i}
						className="w-2.5 h-2.5 text-accent fill-current sm:w-4 sm:h-4"
					/>
				))}
			</div>
		</div>
	</div>
);

const TestimonialsSection = () => {
	return (
		<section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
			<div className="w-full px-0">
				{/* Section Header */}
				<div className="text-center mb-6 sm:mb-12">
					<h2 className="text-lg font-bold text-secondary mb-1 sm:text-4xl sm:lg:text-5xl sm:mb-4">
						What Our Clients Say
					</h2>
					<p className="text-xs text-foreground max-w-xs mx-auto sm:text-xl sm:max-w-3xl">
						Trusted by sports institutions, schools, and clubs across India.
						<br />
						Here&apos;s what our valued clients in India say about our equipment and
						service.
					</p>
				</div>

				{/* Marquee Rows */}
				<div className="space-y-8">
					{/* Row 1: Left to Right */}
					<div className="overflow-hidden">
						<div className="flex animate-marquee-ltr">
							{[...row1, ...row1].map((t, i) => (
								<TestimonialCard testimonial={t} key={`row1-${i}`} />
							))}
						</div>
					</div>
					{/* Row 2: Right to Left */}
					<div className="overflow-hidden">
						<div className="flex animate-marquee-rtl">
							{[...row2, ...row2].map((t, i) => (
								<TestimonialCard testimonial={t} key={`row2-${i}`} />
							))}
						</div>
					</div>
				</div>

				{/* Client Logos */}
				{/* <div className="mt-16">
					<p className="text-center text-foreground mb-8">
						Trusted by leading institutions
					</p>
					<div className="flex items-center justify-center space-x-8 opacity-60">
						<div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
							<span className="text-xs font-semibold text-foreground">
								School Logo
							</span>
						</div>
						<div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
							<span className="text-xs font-semibold text-foreground">
								Club Logo
							</span>
						</div>
						<div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
							<span className="text-xs font-semibold text-foreground">
								Academy
							</span>
						</div>
						<div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
							<span className="text-xs font-semibold text-foreground">
								Federation
							</span>
						</div>
					</div>
				</div> */}
			</div>
			{/* Custom CSS for marquee animation */}
			<style>{`
  @keyframes marquee-ltr {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  @keyframes marquee-rtl {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee-ltr {
    animation: marquee-ltr 8s linear infinite;
  }
  .animate-marquee-rtl {
    animation: marquee-rtl 8s linear infinite;
  }
  @media (min-width: 640px) {
    .animate-marquee-ltr {
      animation-duration: 18s;
    }
    .animate-marquee-rtl {
      animation-duration: 18s;
    }
  }
`}</style>
		</section>
	);
};

export default TestimonialsSection;