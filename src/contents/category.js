import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

class Category extends React.Component {
    handleCatClick = (name) => {
        const { onCatClick } = this.props;
        onCatClick(name);
    }

    render() {
        const { name, image } = this.props;

        return (
            <Card className='CategoryItem' onClick={() => this.handleCatClick(name) }>
                <CardContent className='CategoryImageDiv'>
                    <img alt={name} src={image} className='CategoryImage'/>
                </CardContent>
                
                
            </Card>
        );
    }
}

export default Category;