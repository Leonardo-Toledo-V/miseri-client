import React from 'react';
import { motion } from 'framer-motion';

export default function TransitionEffect () {

    return (
        <>
                <motion.div
                    className='fixed top-0 left-0 w-full bg-[#0F0F0F] origin-bottom z-50'
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                </motion.div>
                <motion.div
                    className='fixed top-0 left-0 w-full h-screen bg-[#0F0F0F] origin-top z-50'
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1 }}
                >
                </motion.div>
        </>
    )
};

