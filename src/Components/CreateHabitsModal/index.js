import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHabits } from '../../Providers/Habits';
import { FormContainer, InputContainer, TitleContainer } from './styles';
import { makeStyles, Button, TextField, Modal, Backdrop, Fade } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'blue',
    backgroundImage: 'linear-gradient(#1D64CB, #741DCB)',
    border: '1px solid #000',
    borderRadius: '20px',
    boxShadow: theme.shadows[9],
    padding: theme.spacing(2, 4, 3),
  },
  inputs:{
    backgroundColor: '#e5e5e5',
    border: '1px solid #000',
    padding: '15px',
    borderRadius:'5px',
    boxShadow: '0px 4px 4px rgba(116, 29, 203, 0.57)',
  }
}));

const CreateHabitsModal = () => {

  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const { register, handleSubmit } = useForm();
  const { createHabit } = useHabits();


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>   
     
        <Button onClick={handleOpen}>
            Criar +
        </Button>
     
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
        <FormContainer>        
            <TitleContainer>
               <h1>Qual seu hábito?</h1>
            </TitleContainer>
        <form onSubmit={handleSubmit(createHabit)}>
        <div className={classes.inputs}>  
          <InputContainer>
            <TextField
              size='small'
              id='outlined-basic'
              label='Título'
              variant='outlined'
              color='primary'
              {...register("title")}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              size='small'
              id='outlined-basic'
              label='Categoria'
              variant='outlined'
              color='primary'
              {...register('category')}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              size='small'
              id='outlined-basic'
              label='Dificuldade'
              variant='outlined'
              color='primary'
              {...register('difficulty')}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              size='small'
              id='outlined-basic'
              label='Frequência'
              variant='outlined'
              {...register('frequency')}
            />
          </InputContainer>
          </div>   
          <InputContainer>
            <Button
              variant='contained'
              color='primary'
              size='small'
              type='submit'
              className='submitButton'
            >
              Adicionar
            </Button>
          </InputContainer>
        </form>
        </FormContainer>  
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


export default CreateHabitsModal