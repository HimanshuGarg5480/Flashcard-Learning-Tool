import React from 'react';

const Flashcard = ({ flashcard, isFlipped, onFlip }) => {

    const cardStyle = {
        transition: 'transform 1s',
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    };

    const faceStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
        backfaceVisibility: 'hidden',
    };

    const frontFaceStyle = {
        ...faceStyle,
    };

    const backFaceStyle = {
        ...faceStyle,
        transform: 'rotateY(180deg)',
    };

    return (
        <div 
            className="w-full sm:w-96 h-64 border border-blue-950 dark:border-white rounded-xl mx-auto mt-10" 
            style={{ perspective: '600px' }}
        >
            <div 
                style={cardStyle}
                className="w-full h-full cursor-pointer relative"
                onClick={onFlip}
            >
                <div style={frontFaceStyle} className="absolute flex items-center justify-center bg-blue-300 dark:bg-[#19202E] rounded-xl">
                    <div className="p-6 text-red-500 dark:text-red-400">
                        {flashcard.question}
                    </div>
                </div>
                <div style={backFaceStyle} className="absolute flex items-center justify-center bg-blue-300 dark:bg-[#19202E] rounded-xl">
                    <div className="p-6 text-blue-900 dark:text-blue-300">
                        {flashcard.answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
