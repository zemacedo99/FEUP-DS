import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --button-primary: linear-gradient(45deg, #6941C6 0%, #7F56D9 100%);
    --button-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    --button-big-shadow: 0px 0px 10px 3px rgba(105, 65, 198, 0.3);
    --button-radius: 10px;

    --gray: #F2F4F7;
  }

  .btn-primary {
    background: var(--button-primary);
    box-shadow: var(--button-shadow);
    border-radius: var(--button-radius);
    border-color: transparent;
    
    color: white;

    transition: box-shadow 0.35s ease-out;
    transition: transform 0.35s;

    :hover {
      background: var(--button-primary);
      box-shadow: var(--button-big-shadow);
      border-color: transparent;
    }

    :focus, :active, :active:focus {
      background: var(--button-primary);
      border-color: transparent;
      box-shadow: unset;
    }

    :active {
     transform:scale(0.97,0.97);
    }
  }

  .modal-content {
    border-radius: 10px;
    padding: 25px 15px;
    outline: none;
    border: none;
    
    .modal-header, .modal-body, .modal-footer {
      padding: 0px;
      border: none;
    }
  }

  .form-label {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: .25rem;
  }

  .form-control {
    border-radius: var(--button-radius);
    font-size: 1rem;
    background-color: var(--gray);
    border: none;

    transition: box-shadow 0.35s ease-out;

    :focus {
      border-color: transparent;
      box-shadow: var(--button-big-shadow);
    }
  }
`;