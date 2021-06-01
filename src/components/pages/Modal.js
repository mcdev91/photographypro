import React from "react";
import './Pages.scss';
import { FaAngleDoubleUp } from 'react-icons/fa';
import Modal from "react-responsive-modal";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

class About extends React.Component {
    state = {
        open: false
    };

    onOpenModal = () => {
        if (this.state.open === false) {
            this.setState({ open: true });
            setTimeout(() => {
                document.querySelector('.styles_modal__gNwvD').classList.add('slide_to_top')
            }, 100)
        } else {
            this.onCloseModal();
        }
    };

    onCloseModal = () => {
        document.querySelector('.styles_modal__gNwvD').classList.remove('slide_to_top');
        setTimeout(() => {

            this.setState({ open: false });

        }, 500);
    };

    render() {
        const { open } = this.state;
        return (
            <div className="modalBtn" style={styles}>
                <button className="modalButton" onClick={this.onOpenModal}><FaAngleDoubleUp className="icon" size={20} />
                </button>
                <div>
                </div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <p>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                       <br />
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                </Modal>
            </div>
        );
    }
}

export default About;