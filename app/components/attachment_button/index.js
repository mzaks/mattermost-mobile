// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {dismissModal, showModalOverCurrentContext} from 'app/actions/navigation';

import AttachmentButton from './attachment_button';

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            dismissModal,
            showModalOverCurrentContext,
        }, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(AttachmentButton);
