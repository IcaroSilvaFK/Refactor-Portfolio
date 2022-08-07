import { styled } from '@stitches/react';

export const ButtonVariant = styled('button', {
  variants: {
    color: {
      outline: {
        backgroundColor: 'transparent',
        color: '#bd3dbd',
        border: '1px solid #bd3dbd',
        width: '100px',
        height: '40px',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          backgroundColor: '#bd3dbd',
          transition: 'all',
          transitionDuration: '.2s',
          color: '#fff',
        },
      },
      full: {
        backgroundColor: '#bd3dbd',
        boxShadow: '0 0 10px rgba(0,0,0,0.4)',
        color: '#fff',
        width: '150px',
        height: '40px',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        marginTop: '20px',
        a: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '&:hover': {
          transform: 'scale(1.1)',
          transition: 'all',
          transitionDuration: '.2s',
        },
      },
      text: {
        backgroundColor: 'transparent',
        color: '#fff',
        span: {
          textDecoration: 'underline',
          textDecorationThickness: '2px',
        },
        a: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
        },
        '&:hover': {
          span: {
            textDecoration: 'none',
            color: '#a0aec0',
          },
          svg: {
            fill: '#a0aec0',
          },
        },
      },
    },
  },
});
