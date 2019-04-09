import React from 'react';
import '../components/VersionGroup.css';

export class VersionGroup extends React.Component{
    constructor(props){
        super(props);
        this.updateVersion = this.updateVersion.bind(this);
    }

    updateVersion(e){
        const sel = e.target;
        const opt = sel[sel.selectedIndex];
        let versionInfo = {
            id: sel.value,
            abb: opt.getAttribute('data-vabb')
        };
        this.props.onChange(versionInfo);
    }

    componentDidMount(){
        const sel = document.querySelector('select[name="version"]');
        const opt = sel[sel.selectedIndex];
        const versionInfo = {
            id: sel.value,
            abb: opt.getAttribute('data-vabb')
        };
        this.props.onChange(versionInfo);
    }

    render(){
        return (
            <React.Fragment>
            <label className="VersionGroup-label">Choose version:</label>
            <select name="version" onChange={this.updateVersion} defaultValue="59" className="VersionGroup-select">
                <option></option>
                <option value="1588" data-vabb="AMP">Amplified Bible</option>
                <option value="8" data-vabb="AMPC">Amplified Bible, Classic Edition</option>
                <option value="12" data-vabb="ASV">American Standard Version</option>
                <option value="31" data-vabb="BOOKS">The Books of the Bible NT</option>
                <option value="37" data-vabb="CEB">Common English Bible</option>
                <option value="392" data-vabb="CEV">Contemporary English Version</option>
                <option value="303" data-vabb="CEVDC">Contemporary English Version</option>
                <option value="294" data-vabb="CEVUK">Contemporary English Version (Anglicised) 2012</option>
                <option value="1275" data-vabb="CJB">Complete Jewish Bible</option>
                <option value="42" data-vabb="CPDV">Catholic Public Domain Version</option>
                <option value="1713" data-vabb="CSB">Christian Standard Bible</option>
                <option value="478" data-vabb="DARBY">Darby's Translation 1890</option>
                <option value="55" data-vabb="DRC1752">Douay-Rheims Challoner Revision 1752</option>
                <option value="2079" data-vabb="EASY">EasyEnglish Bible 2018</option>
                <option value="406" data-vabb="ERV">Holy Bible: Easy-to-Read Version</option>
                <option value="59" data-vabb="ESV">English Standard Version</option>
                <option value="1932" data-vabb="FBVNTPSALMS">Free Bible Version New Testament with Psalms</option>
                <option value="296" data-vabb="GNB">Good News Bible</option>
                <option value="416" data-vabb="GNBDC">Good News Bible (Anglicised)</option>
                <option value="431" data-vabb="GNBDK">Good News Bible (Catholic edition in Septuagint order)</option>
                <option value="68" data-vabb="GNT">Good News Translation</option>
                <option value="69" data-vabb="GNTD">Good News Translation (US Version)</option>
                <option value="2163" data-vabb="GNV">Geneva Bible</option>
                <option value="70" data-vabb="GW">GOD'S WORD Translation</option>
                <option value="1047" data-vabb="GWC">St Paul from the Trenches 1916</option>
                <option value="72" data-vabb="HCSB">Holman Christian Standard Bible</option>
                <option value="1359" data-vabb="ICB">International Children’s Bible</option>
                <option value="1077" data-vabb="JUB">Jubilee Bible</option>
                <option value="1" data-vabb="KJV">King James Version</option>
                <option value="546" data-vabb="KJVA">King James Version with Apocrypha, American Edition</option>
                <option value="547" data-vabb="KJVA">King James Version, American Edition</option>
                <option value="90" data-vabb="LEB">Lexham English Bible</option>
                <option value="1171" data-vabb="MEV">Modern English Version</option>
                <option value="1365" data-vabb="MP1650">Metrical Psalms 1650</option>
                <option value="97" data-vabb="MSG">The Message</option>
                <option value="463" data-vabb="NABRE">New American Bible, revised edition</option>
                <option value="100" data-vabb="NASB">New American Standard Bible</option>
                <option value="105" data-vabb="NCV">New Century Version</option>
                <option value="107" data-vabb="NET">New English Translation</option>
                <option value="110" data-vabb="NIRV">New International Reader's Version</option>
                <option value="111" data-vabb="NIV">New International Version</option>
                <option value="113" data-vabb="NIVUK">New International Version (Anglicised)</option>
                <option value="114" data-vabb="NKJV">New King James Version</option>
                <option value="116" data-vabb="NLT">New Living Translation</option>
                <option value="2135" data-vabb="NMV">New Messianic Version Bible</option>
                <option value="2016" data-vabb="NRSV">New Revised Standard Version</option>
                <option value="2015" data-vabb="NRSV-CI">New Revised Standard Version Catholic Interconfessional</option>
                <option value="130" data-vabb="OJB">Orthodox Jewish Bible</option>
                <option value="2020" data-vabb="RSV">Revised Standard Version</option>
                <option value="2017" data-vabb="RSV-CI">Revised Standard Version</option>
                <option value="477" data-vabb="RV1885">Revised Version 1885</option>
                <option value="1922" data-vabb="RV1895">Revised Version with Apocrypha 1895</option>
                <option value="314" data-vabb="TLV">Tree of Life Version</option>
                <option value="1849" data-vabb="TPT">The Passion Translation</option>
                <option value="316" data-vabb="TS2009">The Scriptures 2009</option>
                <option value="206" data-vabb="WEB">World English Bible</option>
                <option value="1204" data-vabb="WEBBE">World English Bible British Edition</option>
                <option value="1209" data-vabb="WMB">World Messianic Bible</option>
                <option value="1207" data-vabb="WMBBE">World Messianic Bible British Edition</option>
                <option value="821" data-vabb="YLT1898">Young's Literal Translation 3rd Revision 1898</option>
            </select>
            </React.Fragment>
        )
    }
}