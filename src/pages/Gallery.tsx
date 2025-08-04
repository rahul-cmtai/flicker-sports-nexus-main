  import React, { useState } from 'react';
  import Navbar from '@/components/Navbar';
  import Footer from '@/components/Footer';
  import { Camera, Video, ArrowRight, X } from 'lucide-react';
  import { Link } from 'react-router-dom';
  // images import
  // Basketball imports
  // import Basketball1 from '/assets/products/basketball_1.jpg';
  // import Basketball2 from '/assets/products/basketball_2.jpg';
  // import Basketball3 from '/assets/products/basketball_3.jpg';
  // import Basketball4 from '/assets/products/basketball_4.jpg';
  // import Basketball5 from '/assets/products/basketball_5.jpg';
  // import Basketball6 from '/assets/products/basketball_6.jpg';
  // import BasketballMain from '/assets/products/basketball.jpg';
  // import BasketballAlt from '/assets/products/baskehyhgtball_1.jpg';

  // Basketball Post imports
  // import BasketballPostFixed1 from '/assets/products/Basketball_Post_Fixed_1_20_MTR_EXT_1.jpg';
  // import BasketballPostFixed2 from '/assets/products/Basketball_Post_Fixed_1_20_MTR_EXT_2.jpg';
  // import BasketballPostFixed3 from '/assets/products/Basketball_Post_Fixed_1_20_MTR_EXT_3.jpg';
  // import BasketballPostFixed4 from '/assets/products/Basketball_Post_Fixed_1_20_MTR_EXT_4.jpg';
  // import BasketballPostFixed5 from '/assets/products/Basketball_Post_Fixed_1_20_MTR_EXT_5.jpg';
  // import BasketballPostFixedExt1 from '/assets/products/Basketball_Post_Fixed_2_20_MTR_EXT_1.jpg';
  // import BasketballPostFixedExt3 from '/assets/products/Basketball_Post_Fixed_2_20_MTR_EXT_3.jpg';
  // import BasketballPostFixedExt4 from '/assets/products/Basketball_Post_Fixed_2_20_MTR_EXT_4.jpg';
  // import BasketballPostFoundation1 from '/assets/products/Basketball_Post_Fixed_With_Foundation_1.jpg';
  // import BasketballPostFoundation2 from '/assets/products/Basketball_Post_Fixed_With_Foundation_2.jpg';
  // import BasketballPostFoundation3 from '/assets/products/Basketball_Post_Fixed_With_Foundation_3.jpg';
  // import BasketballPostMovable1 from '/assets/products/Basketball_Post_Movable_1.jpg';
  // import BasketballPostMovable2 from '/assets/products/Basketball_Post_Movable_2.jpg';
  // import BasketballPostMovable3 from '/assets/products/Basketball_Post_Movable_3.jpg';
  // import BasketballPostMovable4 from '/assets/products/Basketball_Post_Movable_4.jpg';
  // import BasketballPostMovableHeight1 from '/assets/products/Basketball_Post_Movable_With_Height_Adjustable_1.jpg';
  // import BasketballPostMovableHeight2 from '/assets/products/Basketball_Post_Movable_With_Height_Adjustable_2.jpg';
  // import BasketballPostMovableX1 from '/assets/products/Basketball_Post_Movable_X_Design_1.jpg';
  // import BasketballPostMovableX2 from '/assets/products/Basketball_Post_Movable_X_Design_2.jpg';
  // import BasketballPostHydraulic1 from '/assets/products/Basketball_Post_Movable_Manual_Hydraulic_1.jpg';
  // import BasketballPostHydraulic2 from '/assets/products/Basketball_Post_Movable_Manual_Hydraulic_2.jpg';
  // import BasketballPostHydraulic3 from '/assets/products/Basketball_Post_Movable_Manual_Hydraulic_3.jpg';
  // import BasketballPoles1 from '/assets/products/Basketball_poles_Fix_Height_Adjustable_1.jpg';
  // import BasketballPoles2 from '/assets/products/Basketball_poles_Fix_Height_Adjustable_2.jpg';
  // import BasketballRing1 from '/assets/products/Basketball_Ring_Dunking_Simple_solid_Rim_1.jpg';
  // import BasketballRing2 from '/assets/products/Basketball_Ring_Dunking_Simple_solid_Rim_2.jpg';
  // import BasketballRing3 from '/assets/products/Basketball_Ring_Dunking_Simple_solid_Rim_3.jpg';

  // Badminton imports
  // import BadmintonMain from '/assets/products/Badminton.jpg';
  // import BadmintonPostFixed1 from '/assets/products/Badminton_Post_Fixed_1.jpg';
  // import BadmintonPostFixed2 from '/assets/products/Badminton_Post_Fixed_2.jpg';
  // import BadmintonPostFixed3 from '/assets/products/Badminton_Post_Fixed_3.jpg';
  // import BadmintonPostMovable1 from '/assets/products/Badminton_Post_Movable_1.jpg';
  // import BadmintonPostMovable2 from '/assets/products/Badminton_Post_Movable_2.jpg';
  // import BadmintonPostMovable3 from '/assets/products/Badminton_Post_Movable_3.jpg';
  // import BadmintonPostMovable4 from '/assets/products/Badminton_Post_Movable_4.jpg';
  // import BadmintonPostMovable5 from '/assets/products/Badminton_Post_Movable_5.jpg';
  // import BadmintonPostMovable6 from '/assets/products/Badminton_Post_Movable_6.jpg';
  // import BadmintonPostMovable7 from '/assets/products/Badminton_Post_Movable_7.jpg';
  // import BadmintonPostMovable8 from '/assets/products/Badminton_Post_Movable_8.jpg';

  // Tennis imports
import TennisMain from '/assets/products/Lawn_Tennis.jpg';
import TennisAlt from '/assets/products/tennis.jpg';
import TennisPostAnchor1 from '/assets/products/Lawn_Tennis_Post_Fixed_With_Anchor_Bolt_1.jpg';
import TennisPostAnchor2 from '/assets/products/Lawn_Tennis_Post_Fixed_With_Anchor_Bolt_2.jpg';
import TennisPostAnchor3 from '/assets/products/Lawn_Tennis_Post_Fixed_With_Anchor_Bolt_3.jpg';
import TennisPostMovable1 from '/assets/products/Lawn_Tennis_Post_Movable_1.jpg';
import TennisPostMovable2 from '/assets/products/Lawn_Tennis_Post_Movable_2.jpg';
import TennisPostRatchet1 from '/assets/products/Lawn_Tennis_Post_Fixed_With_brass_Ratchet_1.jpg';
import TennisPostRatchet2 from '/assets/products/Lawn_Tennis_Post_Fixed_With_brass_Ratchet_2.jpg';
import TennisPostRatchet3 from '/assets/products/Lawn_Tennis_Post_Fixed_With_brass_Ratchet_3.jpg';
import TennisPostRatchet4 from '/assets/products/Lawn_Tennis_Post_Fixed_With_brass_Ratchet_4.jpg';

  // Football imports
import FootballMain from '/assets/products/Football.jpg';
import FootballGoalFixed1 from '/assets/products/Football_Goal_Post_Fixed_1.jpg';
import FootballGoalMovable1 from '/assets/products/Football_Goal_Post_Movable_1.jpg';
import FootballGoalMovable2 from '/assets/products/Football_Goal_Post_Movable_2.jpg';
import FootballGoalMovable3 from '/assets/products/Football_Goal_Post_Movable_3.jpg';
import FootballGoalMovable4 from '/assets/products/Football_Goal_Post_Movable_4.jpg';

  // Volleyball imports
  import VolleyballMain from '/assets/products/Volleyball.jpg';
import VolleyballPostFixed1 from '/assets/products/Volleyball_Post_Fixed_1.jpg';
import VolleyballPostMovable1 from '/assets/products/Volleyball_Post_Movable_1.jpg';
import VolleyballPostMovable2 from '/assets/products/Volleyball_Post_Movable_2.jpg';

  // Hockey imports
import HockeyMain from '/assets/products/Hockey.jpg';
import HockeyGoal1 from '/assets/products/HOCKEY_Goal_Post_1.jpg';
import HockeyGoal2 from '/assets/products/HOCKEY_Goal_Post_2.jpg';

  // Handball imports
import HandballMain from '/assets/products/Handball.jpg';
import HandballGoal1 from '/assets/products/Handball_Goal_Post_1.jpg';
import HandballGoal2 from '/assets/products/Handball_Goal_Post_2.jpg';

  // Pickleball imports
import PickleballMain from '/assets/products/Pickleball.jpg';
import PickleballPost1 from '/assets/products/Pickleball_Post_1.jpg';
import PickleballPost2 from '/assets/products/Pickleball_Post_2.jpg';
import PickleballPost3 from '/assets/products/Pickleball_Post_3.jpg';
import PickleballPost4 from '/assets/products/Pickleball_Post_4.jpg';
import PickleballPost5 from '/assets/products/Pickleball_Post_5.jpg';

  // Boxing imports
import BoxingRing from '/assets/products/Boxing_Ring.jpg';
import BoxingRingEquip1 from '/assets/products/Boxing_Ring_Equipment_1.jpg';
import BoxingRingEquip2 from '/assets/products/Boxing_Ring_Equipment_2.jpg';
import BoxingRingEquip3 from '/assets/products/Boxing_Ring_Equipment_3.jpg';

  // Foosball imports
import Foosball from '/assets/products/Foosball.jpg';
import FoosballEquip1 from '/assets/products/Foosball_Equipment_1.jpg';
import FoosballEquip2 from '/assets/products/Foosball_Equipment_2.jpg';
import FoosballEquip3 from '/assets/products/Foosball_Equipment_3.jpg';

  // Gymnastics imports
import Gymnastics from '/assets/products/Gymnastics.jpg';
import GymnasticsEquip1 from '/assets/products/Gymnastics_Equipment_1.jpg';
import GymnasticsEquip2 from '/assets/products/Gymnastics_Equipment_2.jpg';
import PommelHorse1 from '/assets/products/Pommel_Horse_1.jpg';
import UnevenBar from '/assets/products/Uneven_Bar.jpg';
import PoleVault from '/assets/products/POLE_VAULT_SYSTEAM.jpg';

  // Pool and Snooker imports
import PoolSnooker from '/assets/products/Pool_and_Snooker_Tables.jpg';
import PoolTable1 from '/assets/products/POOL_AND_SNOOKER_TABLE_1.jpg';
import PoolTable2 from '/assets/products/POOL_AND_SNOOKER_TABLE_2.jpg';
import PoolTable3 from '/assets/products/POOL_AND_SNOOKER_TABLE_3.jpg';

  // Table Tennis imports
import TableTennis1 from '/assets/products/Table_Tennis_Table_1.jpg';
import TableTennis2 from '/assets/products/Table_Tennis_Table_2.jpg';
import TableTennis3 from '/assets/products/Table_Tennis_Table_3.jpg';

  // Flooring and Gym imports
  import SportsFlooring from '/assets/products/Sports_flooring.jpg';
  import SportsFlooring1 from '/assets/products/Sports_flooring_1.jpg';
  import SportsFlooring2 from '/assets/products/Sports_flooring_2.jpg';
  import SportsFlooring3 from '/assets/products/Sports_flooring_3.jpg';
  import SportsFlooring4 from '/assets/products/Sports_flooring_4.jpg';
  import SportsFlooring5 from '/assets/products/Sports_flooring_5.jpg';
  import SportsFlooring6 from '/assets/products/Sports_flooring_6.jpg';
  import OutdoorGym from '/assets/products/outdoor_gym.png';
  import OutdoorGym1 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_1.jpg';
  import OutdoorGym2 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_2.jpg';
  import OutdoorGym3 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_3.jpg';
  import OutdoorGym4 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_4.jpg';
  import OutdoorGym5 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_5.jpg';
  import OutdoorGym6 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_6.jpg';
  import OutdoorGym7 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_7.jpg';
  import OutdoorGym8 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_8.jpg';
  import OutdoorGym9 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_9.jpg';
  import OutdoorGym10 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_10.jpg';
  import OutdoorGym11 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_11.jpg';
  import OutdoorGym12 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_12.jpg';
  import OutdoorGym13 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_13.jpg';
  import OutdoorGym14 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_14.jpg';
  import OutdoorGym15 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_15.jpg';
  import OutdoorGym16 from '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_16.jpg';

  // Additional images
  import Dugouts from '/assets/products/dugouts-premium-1.jpg';

  const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const categories = [
      { id: 'all', name: 'All Categories' },
      { id: 'basketball', name: 'Basketball Equipment' },
      { id: 'football', name: 'Football Equipment' },
      { id: 'badminton', name: 'Badminton Equipment' },
      { id: 'tennis', name: 'Lawn Tennis' },
      { id: 'volleyball', name: 'Volleyball' },
      { id: 'hockey', name: 'Hockey Equipment' },
      { id: 'handball', name: 'Handball Equipment' },
      { id: 'pickleball', name: 'Pickleball Equipment' },
      { id: 'boxing', name: 'Boxing Equipment' },
      { id: 'foosball', name: 'Foosball Equipment' },
      { id: 'gymnastics', name: 'Gymnastics Equipment' },
      { id: 'pool-snooker', name: 'Pool & Snooker Tables' },
      { id: 'table-tennis', name: 'Table Tennis' },
      { id: 'flooring', name: 'Sports Flooring' },
      { id: 'outdoor-gym', name: 'Outdoor Gym' },
      { id: 'other-sports', name: 'Other Sports' }
    ];

    const galleryItems = [
      // Basketball Equipment
      {
        id: 1,
        title: "Basketball Equipment Collection",
        category: "basketball",
        image: '/assets/products/basketball.jpg',
        images: [
          '/assets/products/basketball.jpg',
          '/assets/products/basketball_1.jpg',
          '/assets/products/basketball_2.jpg',
          '/assets/products/basketball_3.jpg',
          '/assets/products/basketball_4.jpg',
          '/assets/products/basketball_5.jpg',
          '/assets/products/basketball_6.jpg',
          '/assets/products/baskehyhgtball_1.jpg'
        ]
      },
      {
        id: 2,
        title: "Basketball Posts - Fixed (1.20 MTR EXT)",
        category: "basketball",
        image: '/assets/products/Basketball_Post_Fixed_1_20_MTR_EXT_1.jpg',
        images: [
          '/assets/products/Basketball_Post_Fixed_1_20_MTR_EXT_1.jpg',
          '/assets/products/Basketball_Post_Fixed_1_20_MTR_EXT_2.jpg',
          '/assets/products/Basketball_Post_Fixed_1_20_MTR_EXT_3.jpg',
          '/assets/products/Basketball_Post_Fixed_1_20_MTR_EXT_4.jpg',
          '/assets/products/Basketball_Post_Fixed_1_20_MTR_EXT_5.jpg'
        ]
      },
      {
        id: 3,
        title: "Basketball Posts - Fixed (2.20 MTR EXT)",
        category: "basketball",
        image: '/assets/products/Basketball_Post_Fixed_2_20_MTR_EXT_1.jpg',
        images: [
          '/assets/products/Basketball_Post_Fixed_2_20_MTR_EXT_1.jpg',
          '/assets/products/Basketball_Post_Fixed_2_20_MTR_EXT_3.jpg',
          '/assets/products/Basketball_Post_Fixed_2_20_MTR_EXT_4.jpg'
        ]
      },
      {
        id: 4,
        title: "Basketball Posts - Fixed with Foundation",
        category: "basketball",
        image: '/assets/products/Basketball_Post_Fixed_With_Foundation_1.jpg',
        images: [
          '/assets/products/Basketball_Post_Fixed_With_Foundation_1.jpg',
          '/assets/products/Basketball_Post_Fixed_With_Foundation_2.jpg',
          '/assets/products/Basketball_Post_Fixed_With_Foundation_3.jpg'
        ]
      },
      {
        id: 5,
        title: "Basketball Posts - Movable",
        category: "basketball",
        image: '/assets/products/Basketball_Post_Movable_1.jpg',
        images: [
          '/assets/products/Basketball_Post_Movable_1.jpg',
          '/assets/products/Basketball_Post_Movable_2.jpg',
          '/assets/products/Basketball_Post_Movable_3.jpg',
          '/assets/products/Basketball_Post_Movable_4.jpg'
        ]
      },
      {
        id: 6,
        title: "Basketball Posts - Movable with Height Adjustable",
        category: "basketball",
        image: '/assets/products/Basketball_Post_Movable_With_Height_Adjustable_1.jpg',
        images: [
          '/assets/products/Basketball_Post_Movable_With_Height_Adjustable_1.jpg',
          '/assets/products/Basketball_Post_Movable_With_Height_Adjustable_2.jpg'
        ]
      },
      {
        id: 7,
        title: "Basketball Posts - Movable X Design",
        category: "basketball",
        image: '/assets/products/Basketball_Post_Movable_X_Design_1.jpg',
        images: [
          '/assets/products/Basketball_Post_Movable_X_Design_1.jpg',
          '/assets/products/Basketball_Post_Movable_X_Design_2.jpg'
        ]
      },
      {
        id: 8,
        title: "Basketball Posts - Manual Hydraulic",
        category: "basketball",
        image: '/assets/products/Basketball_Post_Movable_Manual_Hydraulic_1.jpg',
        images: [
          '/assets/products/Basketball_Post_Movable_Manual_Hydraulic_1.jpg',
          '/assets/products/Basketball_Post_Movable_Manual_Hydraulic_2.jpg',
          '/assets/products/Basketball_Post_Movable_Manual_Hydraulic_3.jpg'
        ]
      },
      {
        id: 9,
        title: "Basketball Poles - Fix & Height Adjustable",
        category: "basketball",
        image: '/assets/products/Basketball_poles_Fix_Height_Adjustable_1.jpg',
        images: [
          '/assets/products/Basketball_poles_Fix_Height_Adjustable_1.jpg',
          '/assets/products/Basketball_poles_Fix_Height_Adjustable_2.jpg'
        ]
      },
      {
        id: 10,
        title: "Basketball Rings - Dunking & Simple Solid Rim",
        category: "basketball",
        image: '/assets/products/Basketball_Ring_Dunking_Simple_solid_Rim_1.jpg',
        images: [
          '/assets/products/Basketball_Ring_Dunking_Simple_solid_Rim_1.jpg',
          '/assets/products/Basketball_Ring_Dunking_Simple_solid_Rim_2.jpg',
          '/assets/products/Basketball_Ring_Dunking_Simple_solid_Rim_3.jpg'
        ]
      },

      // Football Equipment
      {
        id: 11,
        title: "Football Equipment",
        category: "football",
        image: '/assets/products/Football.jpg',
        images: [
          '/assets/products/Football.jpg'
        ]
      },
      {
        id: 12,
        title: "Football Goal Posts - Fixed",
        category: "football",
        image: '/assets/products/Football_Goal_Post_Fixed_1.jpg',
        images: [
          '/assets/products/Football_Goal_Post_Fixed_1.jpg'
        ]
      },
      {
        id: 13,
        title: "Football Goal Posts - Movable",
        category: "football",
        image: '/assets/products/Football_Goal_Post_Movable_1.jpg',
        images: [
          '/assets/products/Football_Goal_Post_Movable_1.jpg',
          '/assets/products/Football_Goal_Post_Movable_2.jpg',
          '/assets/products/Football_Goal_Post_Movable_3.jpg',
          '/assets/products/Football_Goal_Post_Movable_4.jpg'
        ]
      },

      // Badminton Equipment
      {
        id: 14,
        title: "Badminton Equipment",
        category: "badminton",
        image: '/assets/products/Badminton.jpg',
        images: [
          '/assets/products/Badminton.jpg'
        ]
      },
      {
        id: 15,
        title: "Badminton Posts - Fixed",
        category: "badminton",
        image: '/assets/products/Badminton_Post_Fixed_1.jpg',
        images: [
          '/assets/products/Badminton_Post_Fixed_1.jpg',
          '/assets/products/Badminton_Post_Fixed_2.jpg',
          '/assets/products/Badminton_Post_Fixed_3.jpg'
        ]
      },
      {
        id: 16,
        title: "Badminton Posts - Movable",
        category: "badminton",
        image: '/assets/products/Badminton_Post_Movable_1.jpg',
        images: [
          '/assets/products/Badminton_Post_Movable_1.jpg',
          '/assets/products/Badminton_Post_Movable_2.jpg',
          '/assets/products/Badminton_Post_Movable_3.jpg',
          '/assets/products/Badminton_Post_Movable_4.jpg',
          '/assets/products/Badminton_Post_Movable_5.jpg',
          '/assets/products/Badminton_Post_Movable_6.jpg',
          '/assets/products/Badminton_Post_Movable_7.jpg',
          '/assets/products/Badminton_Post_Movable_8.jpg'
        ]
      },

      // Tennis Equipment
      {
        id: 17,
        title: "Lawn Tennis Equipment",
        category: "tennis",
        image: '/assets/products/Lawn_Tennis.jpg',
        images: [
          '/assets/products/Lawn_Tennis.jpg',
          '/assets/products/tennis.jpg'
        ]
      },
      {
        id: 18,
        title: "Tennis Posts - Fixed with Anchor Bolt",
        category: "tennis",
        image: '/assets/products/Lawn_Tennis_Post_Fixed_With_Anchor_Bolt_1.jpg',
        images: [
          '/assets/products/Lawn_Tennis_Post_Fixed_With_Anchor_Bolt_1.jpg',
          '/assets/products/Lawn_Tennis_Post_Fixed_With_Anchor_Bolt_2.jpg',
          '/assets/products/Lawn_Tennis_Post_Fixed_With_Anchor_Bolt_3.jpg'
        ]
      },
      {
        id: 19,
        title: "Tennis Posts - Movable",
        category: "tennis",
        image: '/assets/products/Lawn_Tennis_Post_Movable_1.jpg',
        images: [
          '/assets/products/Lawn_Tennis_Post_Movable_1.jpg',
          '/assets/products/Lawn_Tennis_Post_Movable_2.jpg'
        ]
      },
      {
        id: 20,
        title: "Tennis Posts - Fixed with Brass Ratchet",
        category: "tennis",
        image: '/assets/products/Lawn_Tennis_Post_Fixed_With_brass_Ratchet_1.jpg',
        images: [
          '/assets/products/Lawn_Tennis_Post_Fixed_With_brass_Ratchet_1.jpg',
          '/assets/products/Lawn_Tennis_Post_Fixed_With_brass_Ratchet_2.jpg',
          '/assets/products/Lawn_Tennis_Post_Fixed_With_brass_Ratchet_3.jpg',
          '/assets/products/Lawn_Tennis_Post_Fixed_With_brass_Ratchet_4.jpg'
        ]
      },

      // Volleyball Equipment
      {
        id: 21,
        title: "Volleyball Equipment",
        category: "volleyball",
        image: '/assets/products/Volleyball.jpg',
        images: [
          '/assets/products/Volleyball.jpg'
        ]
      },
      {
        id: 22,
        title: "Volleyball Posts - Fixed",
        category: "volleyball",
        image: '/assets/products/Volleyball_Post_Fixed_1.jpg',
        images: [
          '/assets/products/Volleyball_Post_Fixed_1.jpg'
        ]
      },
      {
        id: 23,
        title: "Volleyball Posts - Movable",
        category: "volleyball",
        image: '/assets/products/Volleyball_Post_Movable_1.jpg',
        images: [
          '/assets/products/Volleyball_Post_Movable_1.jpg',
          '/assets/products/Volleyball_Post_Movable_2.jpg'
        ]
      },

      // Hockey Equipment
      {
        id: 24,
        title: "Hockey Equipment",
        category: "hockey",
        image: '/assets/products/Hockey.jpg',
        images: [
          '/assets/products/Hockey.jpg'
        ]
      },
      {
        id: 25,
        title: "Hockey Goal Posts",
        category: "hockey",
        image: '/assets/products/HOCKEY_Goal_Post_1.jpg',
        images: [
          '/assets/products/HOCKEY_Goal_Post_1.jpg',
          '/assets/products/HOCKEY_Goal_Post_2.jpg'
        ]
      },

      // Handball Equipment
      {
        id: 26,
        title: "Handball Equipment",
        category: "handball",
        image: '/assets/products/Handball.jpg',
        images: [
          '/assets/products/Handball.jpg'
        ]
      },
      {
        id: 27,
        title: "Handball Goal Posts",
        category: "handball",
        image: '/assets/products/Handball_Goal_Post_1.jpg',
        images: [
          '/assets/products/Handball_Goal_Post_1.jpg',
          '/assets/products/Handball_Goal_Post_2.jpg'
        ]
      },

      // Pickleball Equipment
      {
        id: 28,
        title: "Pickleball Equipment",
        category: "pickleball",
        image: '/assets/products/Pickleball.jpg',
        images: [
          '/assets/products/Pickleball.jpg'
        ]
      },
      {
        id: 29,
        title: "Pickleball Posts",
        category: "pickleball",
        image: '/assets/products/Pickleball_Post_1.jpg',
        images: [
          '/assets/products/Pickleball_Post_1.jpg',
          '/assets/products/Pickleball_Post_2.jpg',
          '/assets/products/Pickleball_Post_3.jpg',
          '/assets/products/Pickleball_Post_4.jpg',
          '/assets/products/Pickleball_Post_5.jpg'
        ]
      },

      // Boxing Equipment
      {
        id: 30,
        title: "Boxing Ring",
        category: "boxing",
        image: '/assets/products/Boxing_Ring.jpg',
        images: [
          '/assets/products/Boxing_Ring.jpg'
        ]
      },
      {
        id: 31,
        title: "Boxing Ring Equipment",
        category: "boxing",
        image: '/assets/products/Boxing_Ring_Equipment_1.jpg',
        images: [
          '/assets/products/Boxing_Ring_Equipment_1.jpg',
          '/assets/products/Boxing_Ring_Equipment_2.jpg',
          '/assets/products/Boxing_Ring_Equipment_3.jpg'
        ]
      },

      // Foosball Equipment
      {
        id: 32,
        title: "Foosball Tables",
        category: "foosball",
        image: '/assets/products/Foosball.jpg',
        images: [
          '/assets/products/Foosball.jpg'
        ]
      },
      {
        id: 33,
        title: "Foosball Equipment",
        category: "foosball",
        image: '/assets/products/Foosball_Equipment_1.jpg',
        images: [
          '/assets/products/Foosball_Equipment_1.jpg',
          '/assets/products/Foosball_Equipment_2.jpg',
          '/assets/products/Foosball_Equipment_3.jpg'
        ]
      },

      // Gymnastics Equipment
      {
        id: 34,
        title: "Gymnastics Equipment",
        category: "gymnastics",
        image: '/assets/products/Gymnastics.jpg',
        images: [
          '/assets/products/Gymnastics.jpg'
        ]
      },
      {
        id: 35,
        title: "Gymnastics Equipment Collection",
        category: "gymnastics",
        image: '/assets/products/Gymnastics_Equipment_1.jpg',
        images: [
          '/assets/products/Gymnastics_Equipment_1.jpg',
          '/assets/products/Gymnastics_Equipment_2.jpg'
        ]
      },
      {
        id: 36,
        title: "Pommel Horse",
        category: "gymnastics",
        image: '/assets/products/Pommel_Horse_1.jpg',
        images: [
          '/assets/products/Pommel_Horse_1.jpg'
        ]
      },
      {
        id: 37,
        title: "Uneven Bar",
        category: "gymnastics",
        image: '/assets/products/Uneven_Bar.jpg',
        images: [
          '/assets/products/Uneven_Bar.jpg'
        ]
      },
      {
        id: 38,
        title: "Pole Vault System",
        category: "gymnastics",
        image: '/assets/products/POLE_VAULT_SYSTEAM.jpg',
        images: [
          '/assets/products/POLE_VAULT_SYSTEAM.jpg'
        ]
      },

      // Pool and Snooker Tables
      {
        id: 39,
        title: "Pool and Snooker Tables",
        category: "pool-snooker",
        image: '/assets/products/Pool_and_Snooker_Tables.jpg',
        images: [
          '/assets/products/Pool_and_Snooker_Tables.jpg'
        ]
      },
      {
        id: 40,
        title: "Pool and Snooker Table Collection",
        category: "pool-snooker",
        image: '/assets/products/POOL_AND_SNOOKER_TABLE_1.jpg',
        images: [
          '/assets/products/POOL_AND_SNOOKER_TABLE_1.jpg',
          '/assets/products/POOL_AND_SNOOKER_TABLE_2.jpg',
          '/assets/products/POOL_AND_SNOOKER_TABLE_3.jpg'
        ]
      },

      // Table Tennis
      {
        id: 41,
        title: "Table Tennis Tables",
        category: "table-tennis",
        image: '/assets/products/Table_Tennis_Table_1.jpg',
        images: [
          '/assets/products/Table_Tennis_Table_1.jpg',
          '/assets/products/Table_Tennis_Table_2.jpg',
          '/assets/products/Table_Tennis_Table_3.jpg'
        ]
      },

      // Sports Flooring
      {
        id: 42,
        title: "Sports Flooring",
        category: "flooring",
        image: '/assets/products/Sports_flooring.jpg',
        images: [
          '/assets/products/Sports_flooring.jpg'
        ]
      },
      {
        id: 43,
        title: "Sports Flooring Collection",
        category: "flooring",
        image: '/assets/products/Sports_flooring_1.jpg',
        images: [
          '/assets/products/Sports_flooring_1.jpg',
          '/assets/products/Sports_flooring_2.jpg',
          '/assets/products/Sports_flooring_3.jpg',
          '/assets/products/Sports_flooring_4.jpg',
          '/assets/products/Sports_flooring_5.jpg',
          '/assets/products/Sports_flooring_6.jpg'
        ]
      },

      // Outdoor Gym
      {
        id: 44,
        title: "Outdoor Gym Equipment",
        category: "outdoor-gym",
        image: '/assets/products/outdoor_gym.png',
        images: [
          '/assets/products/outdoor_gym.png'
        ]
      },
      {
        id: 45,
        title: "Outdoor Gym and Children Play Equipment",
        category: "outdoor-gym",
        image: '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_1.jpg',
        images: [
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_1.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_2.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_3.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_4.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_5.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_6.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_7.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_8.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_9.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_10.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_11.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_12.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_13.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_14.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_15.jpg',
          '/assets/products/Outdoor_Gym_And_Children_Play_Equipment_16.jpg'
        ]
      },

      // Other Sports
      {
        id: 46,
        title: "Premium Dugouts",
        category: "other-sports",
        image: '/assets/products/dugouts-premium-1.jpg',
        images: [
          '/assets/products/dugouts-premium-1.jpg'
        ]
      }
    ];

    const filteredItems = selectedCategory === 'all' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === selectedCategory);

    const openImageModal = (images: string[], initialIndex: number = 0) => {
      setSelectedImages(images);
      setCurrentImageIndex(initialIndex);
      setSelectedImage(images[initialIndex]);
    };

    const closeImageModal = () => {
      setSelectedImage(null);
      setSelectedImages([]);
      setCurrentImageIndex(0);
    };

    const nextImage = () => {
      if (currentImageIndex < selectedImages.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
        setSelectedImage(selectedImages[currentImageIndex + 1]);
      }
    };

    const prevImage = () => {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
        setSelectedImage(selectedImages[currentImageIndex - 1]);
      }
    };

    return (
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
              Explore our extensive collection of sports equipment installations and 
              see the quality and craftsmanship that sets us apart.
            </p>
            
            {/* Video Channel Link */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="https://youtube.com/@flickersports" 
                target="_blank"
                className="group flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Video className="w-5 h-5" />
                <span className="font-medium">Visit Our YouTube Channel</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Category Filter */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-card text-foreground hover:bg-muted border border-border'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group sports-card bg-card rounded-xl overflow-hidden border border-border cursor-pointer"
                  onClick={() => openImageModal(item.images)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-200">
                        <Camera className="w-4 h-4 mr-2" />
                        Click to view
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 text-red-500 hover:text-red-400 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              {selectedImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-400 disabled:opacity-50"
                  >
                    <ArrowRight className="w-8 h-8 rotate-180" />
                  </button>
                  <button
                    onClick={nextImage}
                    disabled={currentImageIndex === selectedImages.length - 1}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-400 disabled:opacity-50"
                  >
                    <ArrowRight className="w-8 h-8" />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              {selectedImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                  {currentImageIndex + 1} / {selectedImages.length}
                </div>
              )}
            </div>
          </div>
        )}

        <Footer />
      </div>
    );
  };

  export default Gallery;