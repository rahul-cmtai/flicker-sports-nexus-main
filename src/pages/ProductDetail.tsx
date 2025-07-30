import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Share2, Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductSpecifications {
  [key: string]: string;
}

interface Product {
  name: string;
  price: string;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  features: string[];
  specifications: ProductSpecifications;
}

const ProductDetail = () => {
  const { productName } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Product data based on product name
  const getProductData = (name: string | undefined): Product => {
    const productName = name?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Cricket Equipment';
    
    const productDatabase: { [key: string]: Product } = {
      'cricket': {
        name: 'Cricket Equipment',
        price: "₹15,000 - ₹75,000",
        rating: 4.9,
        reviews: 156,
        images: [
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=600&fit=crop"
        ],
        description: "Professional cricket equipment including nets, batting cages, bowling machines, and training gear. Designed for schools, clubs, and professional training facilities across India.",
        features: [
          "Professional-grade cricket nets",
          "Automated bowling machines",
          "Batting cages with safety features",
          "Weather-resistant materials",
          "Easy installation and maintenance",
          "5-year warranty included"
        ],
        specifications: {
          "Material": "Galvanized Steel & Nylon Nets",
          "Net Height": "3.5m - 4.5m adjustable",
          "Length": "20m - 30m customizable",
          "Bowling Machine": "Variable speed control",
          "Safety Features": "Impact-absorbing padding",
          "Warranty": "5 years"
        }
      },
      'football': {
        name: 'Football Equipment',
        price: "₹8,000 - ₹35,000",
        rating: 4.7,
        reviews: 89,
        images: [
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=600&fit=crop"
        ],
        description: "Complete football equipment including goals, nets, training equipment, and field marking systems. Perfect for schools, clubs, and professional football facilities.",
        features: [
          "Professional football goals",
          "High-quality nylon nets",
          "Training equipment sets",
          "Field marking systems",
          "Portable and fixed options",
          "3-year warranty included"
        ],
        specifications: {
          "Material": "Galvanized Steel & Nylon",
          "Goal Size": "7.32m x 2.44m standard",
          "Net Material": "Weather-resistant nylon",
          "Portable": "Yes, with wheels",
          "Installation": "Professional support",
          "Warranty": "3 years"
        }
      },
      'badminton': {
        name: 'Badminton Equipment',
        price: "₹12,000 - ₹45,000",
        rating: 4.8,
        reviews: 67,
        images: [
          "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
        ],
        description: "Professional badminton courts, nets, and equipment for indoor and outdoor facilities. Built to international standards with premium materials.",
        features: [
          "Professional badminton courts",
          "High-quality nets and posts",
          "Indoor and outdoor options",
          "Anti-slip flooring",
          "LED lighting systems",
          "5-year warranty included"
        ],
        specifications: {
          "Court Size": "13.4m x 6.1m standard",
          "Net Height": "1.55m at center",
          "Material": "Galvanized Steel & Nylon",
          "Flooring": "Anti-slip synthetic",
          "Lighting": "LED systems available",
          "Warranty": "5 years"
        }
      },
      'kabaddi': {
        name: 'Kabaddi Equipment',
        price: "₹5,000 - ₹25,000",
        rating: 4.6,
        reviews: 34,
        images: [
          "https://images.unsplash.com/photo-1622546016830-a02e0a531fbb?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1622546016830-a02e0a531fbb?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
        ],
        description: "Professional kabaddi courts and equipment designed for traditional Indian sport. Includes court marking, safety equipment, and training facilities.",
        features: [
          "Professional kabaddi courts",
          "Anti-slip flooring",
          "Safety padding systems",
          "Court marking systems",
          "Training equipment",
          "3-year warranty included"
        ],
        specifications: {
          "Court Size": "13m x 10m standard",
          "Material": "Anti-slip synthetic",
          "Safety": "Impact-absorbing padding",
          "Marking": "Professional court lines",
          "Installation": "Professional support",
          "Warranty": "3 years"
        }
      },
      'hockey': {
        name: 'Hockey Equipment',
        price: "₹10,000 - ₹40,000",
        rating: 4.7,
        reviews: 45,
        images: [
          "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
        ],
        description: "Professional hockey equipment including goals, nets, training equipment, and field marking systems for India's national sport.",
        features: [
          "Professional hockey goals",
          "High-quality nets",
          "Training equipment",
          "Field marking systems",
          "Safety equipment",
          "3-year warranty included"
        ],
        specifications: {
          "Goal Size": "3.66m x 2.14m standard",
          "Material": "Galvanized Steel & Nylon",
          "Net Material": "Weather-resistant nylon",
          "Safety": "Impact-absorbing padding",
          "Installation": "Professional support",
          "Warranty": "3 years"
        }
      },
      'table-tennis': {
        name: 'Table Tennis Equipment',
        price: "₹3,000 - ₹15,000",
        rating: 4.5,
        reviews: 78,
        images: [
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
        ],
        description: "Professional table tennis tables, nets, and equipment for indoor facilities. Perfect for schools, clubs, and recreational centers.",
        features: [
          "Professional table tennis tables",
          "High-quality nets and posts",
          "Indoor and outdoor options",
          "Foldable tables available",
          "Professional lighting",
          "2-year warranty included"
        ],
        specifications: {
          "Table Size": "2.74m x 1.525m standard",
          "Material": "High-density fiberboard",
          "Net Height": "15.25cm standard",
          "Portable": "Foldable options",
          "Lighting": "LED systems available",
          "Warranty": "2 years"
        }
      },
      'outdoor-gym': {
        name: 'Outdoor Gym Equipment',
        price: "₹50,000 - ₹2,00,000",
        rating: 4.8,
        reviews: 123,
        images: [
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
        ],
        description: "Complete outdoor gym setups with professional fitness equipment. Perfect for parks, schools, and community centers across India.",
        features: [
          "Complete gym equipment sets",
          "Weather-resistant materials",
          "Safety-certified equipment",
          "Professional installation",
          "Maintenance support",
          "5-year warranty included"
        ],
        specifications: {
          "Equipment": "15+ different machines",
          "Material": "Weather-resistant steel",
          "Safety": "ISO certified",
          "Installation": "Professional team",
          "Maintenance": "Annual service included",
          "Warranty": "5 years"
        }
      },
      'athletics': {
        name: 'Athletics Equipment',
        price: "₹25,000 - ₹1,00,000",
        rating: 4.7,
        reviews: 56,
        images: [
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
        ],
        description: "Professional athletics equipment including track and field equipment, jumping pits, throwing equipment, and timing systems.",
        features: [
          "Professional track equipment",
          "Jumping pits and runways",
          "Throwing equipment",
          "Timing systems",
          "Safety equipment",
          "5-year warranty included"
        ],
        specifications: {
          "Track": "400m standard track",
          "Material": "Synthetic rubber",
          "Equipment": "Complete athletics set",
          "Timing": "Electronic systems",
          "Safety": "Professional standards",
          "Warranty": "5 years"
        }
      },
      'basketball': {
        name: 'Basketball Equipment',
        price: "₹15,000 - ₹50,000",
        rating: 4.6,
        reviews: 67,
        images: [
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=600&fit=crop"
        ],
        description: "Professional basketball equipment including hoops, backboards, and court systems. Built for durability and performance.",
        features: [
          "Height adjustable hoops",
          "Tempered glass backboards",
          "Professional court systems",
          "Weather-resistant materials",
          "Easy installation",
          "5-year warranty included"
        ],
        specifications: {
          "Material": "Galvanized Steel",
          "Height": "Adjustable 2.6m - 3.05m",
          "Backboard": "Tempered glass/Acrylic",
          "Rim": "Spring-loaded breakaway",
          "Installation": "Professional support",
          "Warranty": "5 years"
        }
      },
      'volleyball': {
        name: 'Volleyball Equipment',
        price: "₹8,000 - ₹30,000",
        rating: 4.5,
        reviews: 43,
        images: [
          "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
        ],
        description: "Professional volleyball equipment including nets, posts, and court systems. Perfect for schools, clubs, and beach volleyball facilities.",
        features: [
          "Professional volleyball nets",
          "Adjustable height posts",
          "Court marking systems",
          "Beach volleyball options",
          "Safety equipment",
          "3-year warranty included"
        ],
        specifications: {
          "Net Height": "2.43m (men) / 2.24m (women)",
          "Material": "Galvanized Steel & Nylon",
          "Court Size": "18m x 9m standard",
          "Portable": "Yes, with wheels",
          "Safety": "Impact-absorbing padding",
          "Warranty": "3 years"
        }
      },
      'lawn-tennis': {
        name: 'Lawn Tennis Equipment',
        price: "₹20,000 - ₹80,000",
        rating: 4.8,
        reviews: 89,
        images: [
          "https://images.unsplash.com/photo-1622546016830-a02e0a531fbb?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1622546016830-a02e0a531fbb?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
        ],
        description: "Professional tennis courts, nets, and equipment for both indoor and outdoor facilities. Built to international standards.",
        features: [
          "Professional tennis courts",
          "High-quality nets and posts",
          "Indoor and outdoor options",
          "Court lighting systems",
          "Professional installation",
          "5-year warranty included"
        ],
        specifications: {
          "Court Size": "23.77m x 10.97m standard",
          "Net Height": "0.914m at center",
          "Material": "Synthetic/Clay options",
          "Lighting": "Professional LED systems",
          "Installation": "Professional team",
          "Warranty": "5 years"
        }
      },
             'kho-kho': {
         name: 'Kho-Kho Equipment',
         price: "₹4,000 - ₹20,000",
         rating: 4.4,
         reviews: 28,
         images: [
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
         ],
         description: "Professional kho-kho courts and equipment for traditional Indian sport. Includes court marking, poles, and safety equipment.",
         features: [
           "Professional kho-kho courts",
           "Anti-slip flooring",
           "Court marking systems",
           "Safety equipment",
           "Training facilities",
           "3-year warranty included"
         ],
         specifications: {
           "Court Size": "29m x 16m standard",
           "Material": "Anti-slip synthetic",
           "Poles": "Galvanized steel",
           "Marking": "Professional court lines",
           "Safety": "Impact-absorbing padding",
           "Warranty": "3 years"
         }
       },
       'flooring': {
         name: 'Sports Flooring',
         price: "₹200 - ₹800 per sq ft",
         rating: 4.6,
         reviews: 89,
         images: [
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
         ],
         description: "Professional sports flooring solutions for indoor and outdoor facilities. Anti-slip, durable, and designed for various sports.",
         features: [
           "Anti-slip surface",
           "Weather-resistant materials",
           "Easy installation",
           "Low maintenance",
           "Multiple color options",
           "5-year warranty included"
         ],
         specifications: {
           "Material": "Synthetic rubber/PVC",
           "Thickness": "8mm - 15mm",
           "Surface": "Anti-slip texture",
           "Installation": "Professional team",
           "Maintenance": "Easy cleaning",
           "Warranty": "5 years"
         }
       },
       'pool-tables': {
         name: 'Pool Tables',
         price: "₹25,000 - ₹1,00,000",
         rating: 4.5,
         reviews: 34,
         images: [
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
         ],
         description: "Professional pool tables for clubs, recreation centers, and home use. High-quality construction with premium materials.",
         features: [
           "Professional-grade tables",
           "High-quality felt",
           "Sturdy construction",
           "Leveling system",
           "Accessories included",
           "3-year warranty included"
         ],
         specifications: {
           "Table Size": "7ft, 8ft, 9ft options",
           "Material": "Solid wood frame",
           "Felt": "Professional grade",
           "Leveling": "Adjustable feet",
           "Accessories": "Cues, balls, rack",
           "Warranty": "3 years"
         }
       },
       'foosball': {
         name: 'Foosball Tables',
         price: "₹8,000 - ₹35,000",
         rating: 4.4,
         reviews: 23,
         images: [
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
         ],
         description: "Professional foosball tables for entertainment and recreation. Perfect for clubs, offices, and home use.",
         features: [
           "Professional-grade tables",
           "Smooth player movement",
           "Sturdy construction",
           "Easy assembly",
           "Multiple player options",
           "2-year warranty included"
         ],
         specifications: {
           "Table Size": "Standard tournament size",
           "Material": "Solid wood/MDF",
           "Players": "Professional grade",
           "Assembly": "Easy setup",
           "Portable": "Yes",
           "Warranty": "2 years"
         }
       },
       'handball': {
         name: 'Handball Equipment',
         price: "₹6,000 - ₹25,000",
         rating: 4.3,
         reviews: 19,
         images: [
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
         ],
         description: "Professional handball equipment including goals, courts, and training equipment for indoor facilities.",
         features: [
           "Professional handball goals",
           "Court marking systems",
           "Training equipment",
           "Safety equipment",
           "Indoor facilities",
           "3-year warranty included"
         ],
         specifications: {
           "Goal Size": "3m x 2m standard",
           "Material": "Galvanized Steel",
           "Court Size": "40m x 20m standard",
           "Safety": "Impact-absorbing padding",
           "Installation": "Professional support",
           "Warranty": "3 years"
         }
       },
       'gymnastics': {
         name: 'Gymnastics Equipment',
         price: "₹30,000 - ₹1,50,000",
         rating: 4.7,
         reviews: 45,
         images: [
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
         ],
         description: "Complete gymnastics equipment for training facilities, schools, and clubs. Professional-grade equipment for all skill levels.",
         features: [
           "Complete gymnastics setup",
           "Safety-certified equipment",
           "Professional installation",
           "Training support",
           "Maintenance service",
           "5-year warranty included"
         ],
         specifications: {
           "Equipment": "Complete gymnastics set",
           "Material": "High-grade steel",
           "Safety": "ISO certified",
           "Installation": "Professional team",
           "Training": "Setup guidance included",
           "Warranty": "5 years"
         }
       },
       'boxing-ring': {
         name: 'Boxing Ring Equipment',
         price: "₹50,000 - ₹2,00,000",
         rating: 4.6,
         reviews: 38,
         images: [
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
         ],
         description: "Professional boxing ring equipment for training facilities and clubs. Complete setup with safety features and professional standards.",
         features: [
           "Professional boxing ring",
           "Safety padding systems",
           "Ring ropes and posts",
           "Flooring system",
           "Professional installation",
           "5-year warranty included"
         ],
         specifications: {
           "Ring Size": "6m x 6m standard",
           "Material": "High-grade steel",
           "Padding": "Impact-absorbing foam",
           "Ropes": "Professional grade",
           "Installation": "Professional team",
           "Warranty": "5 years"
         }
       },
       'swimming': {
         name: 'Swimming Equipment',
         price: "₹1,00,000 - ₹5,00,000",
         rating: 4.8,
         reviews: 67,
         images: [
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
         ],
         description: "Complete swimming pool equipment and accessories for sports facilities, schools, and clubs. Professional-grade equipment.",
         features: [
           "Swimming pool equipment",
           "Filtration systems",
           "Safety equipment",
           "Training accessories",
           "Professional installation",
           "5-year warranty included"
         ],
         specifications: {
           "Equipment": "Complete pool setup",
           "Filtration": "Professional systems",
           "Safety": "ISO certified",
           "Installation": "Professional team",
           "Maintenance": "Annual service",
           "Warranty": "5 years"
         }
       },
       'other': {
         name: 'Other Sports Equipment',
         price: "₹5,000 - ₹50,000",
         rating: 4.5,
         reviews: 56,
         images: [
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
           "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=600&fit=crop"
         ],
         description: "Custom sports equipment and specialized gear for various sports and activities. Contact us for custom requirements.",
         features: [
           "Custom equipment design",
           "Specialized sports gear",
           "Professional consultation",
           "Custom manufacturing",
           "Quality assurance",
           "3-year warranty included"
         ],
         specifications: {
           "Customization": "Based on requirements",
           "Material": "Premium quality",
           "Design": "Professional consultation",
           "Manufacturing": "Custom made",
           "Quality": "ISO certified",
           "Warranty": "3 years"
         }
       }
    };

    const normalizedName = name?.toLowerCase().replace(/\s+/g, '-');
    return productDatabase[normalizedName] || productDatabase['cricket'];
  };

  const product = getProductData(productName);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Breadcrumb */}
      <section className="pt-20 pb-6 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-primary hover:text-accent">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-primary hover:text-accent">Products</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-primary hover:text-accent">
              All Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden border border-border">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-border hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-secondary mb-4">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-6">{product.price}</div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-secondary mb-3">Description</h3>
                <p className="text-foreground leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-secondary mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 cta-primary">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Request Quote
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Save
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </Button>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-secondary mb-3">Need Help?</h3>
                <p className="text-foreground mb-4">
                  Our experts are here to help you choose the right product for your needs.
                </p>
                <Link to="/contact" className="inline-flex items-center text-primary hover:text-accent font-medium">
                  Contact Our Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-secondary mb-8">Specifications</h2>
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-border">
                    <span className="font-medium text-secondary">{key}</span>
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;