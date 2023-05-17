
const pool = require("../database/index")

const postsController = {

    createUsersAccount: async (req, res) => {
        try {
            const {
                idno,
                firstname,
                lastname,
                birthdate,
                sex,
                mobilenumber, 
                email,
                password
            } = req.body
            const sql = "INSERT INTO reg ( " +
                "idno, " +
                "firstname, " +
                "lastname, " +
                "birthdate, " +
                "sex, " +
                "mobilenumber, " +
                "email, " +
                "password " +
                ") VALUES " +
                "(?, ?, ?, ?, ?, ?, ?, ?)"
            const [rows, fields] = await pool.query(
                sql,
                [
                    idno,
                    firstname,
                    lastname,
                    birthdate,
                    sex,
                    mobilenumber,
                    email,
                    password
                ]
            )
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    retrieveUsersAccount: async (req, res) => {
        try {
            const {
                id,
                password
            } = req.params
            const [rows, fields] = await pool.query("SELECT " +
                "COUNT(*)" +
                "FROM " +
                "reg " +
                "WHERE " +
                "idno = ? " +
                "AND " +
                "password = ?",
                [
                    id,
                    password
                ]
            )
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    retrieveAllAppeals: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT " +
                "* " +
                "FROM " +
                "appealsTable"
            )
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    createAppeals: async (req, res) => {
        try {
            const {
                typeAppeal,
                doccn,
                pardcn,
                mrn,
                seriesnumber,
                prd,
                PhROName,
                mrdd,
                mrdr,
                appealdate,
                appealmailed,
                mos,
                appelantid,
                appelantname,
                appelantaddress,
                zipcode1,
                telnum1,
                memberPhicNo,
                memberName,
                memberAddress,
                zipcode2,
                telnum2,
                member,
                hospital,
                doctor,
                others,
                reappealDate,
                ExGratifia,
                appealStatus,
                patientName1,
                patientType1,
                illnessCode1,
                accreditationPeriod1,
                dateReceived1,
                dateAdmitted1,
                dateDischarged1,
                daysConfinement1,
                CPDReasonForDenial1,
                MRReasonForDenial1,
                hospitalCode,
                hospitalName,
                hospitalCategory,
                accreditationPeriod2,
                dateReceived2,
                dateAdmitted2,
                dateDischarged2,
                daysConfinement2,
                CPDReasonForDenial2,
                MRReasonForDenial2,
                patientName2,
                patientType2,
                illnessCode2,
                illnessCategory,
                dateReceived3,
                dateAdmitted3,
                dateDischarged3,
                daysConfinement3,
                CPDReasonForDenial3,
                MRReasonForDenial3
            } = req.body
            const sql = "INSERT INTO appealsTable ( " +
            "typeAppeal, " +
            "doccn, " +
            "pardcn, " +
            "mrn, " +
            "seriesnumber, " +
            "prd, " +
            "PhROName, " +
            "mrdd, " +
            "mrdr, " +
            "appealdate, " +
            "appealmailed, " +
            "mos, " +
            "appelantid, " +
            "appelantname, " +
            "appelantaddress, " +
            "zipcode1, " +
            "telnum1, " +
            "memberPhicNo, " +
            "memberName, " +
            "memberAddress, " +
            "zipcode2, " +
            "telnum2, " +
            "member, " +
            "hospital, " +
            "doctor, " +
            "others, " +
            "reappealDate, " +
            "ExGratifia, " +
            "appealStatus, " +
            "patientName1, " +
            "patientType1, " +
            "illnessCode1, " +
            "accreditationPeriod1, " +
            "dateReceived1, " +
            "dateAdmitted1, " +
            "dateDischarged1, " +
            "daysConfinement1, " +
            "CPDReasonForDenial1, " +
            "MRReasonForDenial1, " +
            "hospitalCode, " +
            "hospitalName, " +
            "hospitalCategory, " +
            "accreditationPeriod2, " +
            "dateReceived2, " +
            "dateAdmitted2, " +
            "dateDischarged2, " +
            "daysConfinement2, " +
            "CPDReasonForDenial2, " +
            "MRReasonForDenial2, " +
            "patientName2, " +
            "patientType2, " +
            "illnessCode2, " +
            "illnessCategory, " +
            "dateReceived3, " +
            "dateAdmitted3, " +
            "dateDischarged3, " +
            "daysConfinement3, " +
            "CPDReasonForDenial3, " +
            "MRReasonForDenial3 " +
            ") VALUES (" +
            "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, " +
            "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, " +
            "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, " +
            "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, " +
            "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, " +
            "?, ?, ?, ?, ?, ?, ?, ?, ?)"
            const [rows, fields] = await pool.query(
                sql,
                [
                    typeAppeal,
                    doccn,
                    pardcn,
                    mrn,
                    seriesnumber,
                    prd,
                    PhROName,
                    mrdd,
                    mrdr,
                    appealdate,
                    appealmailed,
                    mos,
                    appelantid,
                    appelantname,
                    appelantaddress,
                    zipcode1,
                    telnum1,
                    memberPhicNo,
                    memberName,
                    memberAddress,
                    zipcode2,
                    telnum2,
                    member,
                    hospital,
                    doctor,
                    others,
                    reappealDate,
                    ExGratifia,
                    appealStatus,
                    patientName1,
                    patientType1,
                    illnessCode1,
                    accreditationPeriod1,
                    dateReceived1,
                    dateAdmitted1,
                    dateDischarged1,
                    daysConfinement1,
                    CPDReasonForDenial1,
                    MRReasonForDenial1,
                    hospitalCode,
                    hospitalName,
                    hospitalCategory,
                    accreditationPeriod2,
                    dateReceived2,
                    dateAdmitted2,
                    dateDischarged2,
                    daysConfinement2,
                    CPDReasonForDenial2,
                    MRReasonForDenial2,
                    patientName2,
                    patientType2,
                    illnessCode2,
                    illnessCategory,
                    dateReceived3,
                    dateAdmitted3,
                    dateDischarged3,
                    daysConfinement3,
                    CPDReasonForDenial3,
                    MRReasonForDenial3
                ]
            )
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    updateAppeals: async (req, res) => {
        try {
            const {
                typeAppeal,
                doccn,
                pardcn,
                mrn,
                seriesnumber,
                prd,
                PhROName,
                mrdd,
                mrdr,
                appealdate,
                appealmailed,
                mos,
                appelantid,
                appelantname,
                appelantaddress,
                zipcode1,
                telnum1,
                memberPhicNo,
                memberName,
                memberAddress,
                zipcode2,
                telnum2,
                member,
                hospital,
                doctor,
                others,
                reappealDate,
                ExGratifia,
                appealStatus,
                patientName1,
                patientType1,
                illnessCode1,
                accreditationPeriod1,
                dateReceived1,
                dateAdmitted1,
                dateDischarged1,
                daysConfinement1,
                CPDReasonForDenial1,
                MRReasonForDenial1,
                hospitalCode,
                hospitalName,
                hospitalCategory,
                accreditationPeriod2,
                dateReceived2,
                dateAdmitted2,
                dateDischarged2,
                daysConfinement2,
                CPDReasonForDenial2,
                MRReasonForDenial2,
                patientName2,
                patientType2,
                illnessCode2,
                illnessCategory,
                dateReceived3,
                dateAdmitted3,
                dateDischarged3,
                daysConfinement3,
                CPDReasonForDenial3,
                MRReasonForDenial3
            } = req.body
            const {
                appealsID
            } = req.params
            const sql = "UPDATE appealsTable SET " +
            "typeAppeal = ?, " +
            "doccn = ?, " +
            "pardcn = ?, " +
            "mrn = ?, " +
            "seriesnumber = ?, " +
            "prd = ?, " +
            "PhROName = ?, " +
            "mrdd = ?, " +
            "mrdr = ?, " +
            "appealdate = ?, " +
            "appealmailed = ?, " +
            "mos = ?, " +
            "appelantid = ?, " +
            "appelantname = ?, " +
            "appelantaddress = ?, " +
            "zipcode1 = ?, " +
            "telnum1 = ?, " +
            "memberPhicNo = ?, " +
            "memberName = ?, " +
            "memberAddress = ?, " +
            "zipcode2 = ?, " +
            "telnum2 = ?, " +
            "member = ?, " +
            "hospital = ?, " +
            "doctor = ?, " +
            "others = ?, " +
            "reappealDate = ?, " +
            "ExGratifia = ?, " +
            "appealStatus = ?, " +
            "patientName1 = ?, " +
            "patientType1 = ?, " +
            "illnessCode1 = ?, " +
            "accreditationPeriod1 = ?, " +
            "dateReceived1 = ?, " +
            "dateAdmitted1 = ?, " +
            "dateDischarged1 = ?, " +
            "daysConfinement1 = ?, " +
            "CPDReasonForDenial1 = ?, " +
            "MRReasonForDenial1 = ?, " +
            "hospitalCode = ?, " +
            "hospitalName = ?, " +
            "hospitalCategory = ?, " +
            "accreditationPeriod2 = ?, " +
            "dateReceived2 = ?, " +
            "dateAdmitted2 = ?, " +
            "dateDischarged2 = ?, " +
            "daysConfinement2 = ?, " +
            "CPDReasonForDenial2 = ?, " +
            "MRReasonForDenial2 = ?, " +
            "patientName2 = ?, " +
            "patientType2 = ?, " +
            "illnessCode2 = ?, " +
            "illnessCategory = ?, " +
            "dateReceived3 = ?, " +
            "dateAdmitted3 = ?, " +
            "dateDischarged3 = ?, " +
            "daysConfinement3 = ?, " +
            "CPDReasonForDenial3 = ?, " +
            "MRReasonForDenial3 = ? " +
            "WHERE " +
            "appealsID = ?"
            const [rows, fields] = await pool.query(
                sql,
                [
                    typeAppeal,
                    doccn,
                    pardcn,
                    mrn,
                    seriesnumber,
                    prd,
                    PhROName,
                    mrdd,
                    mrdr,
                    appealdate,
                    appealmailed,
                    mos,
                    appelantid,
                    appelantname,
                    appelantaddress,
                    zipcode1,
                    telnum1,
                    memberPhicNo,
                    memberName,
                    memberAddress,
                    zipcode2,
                    telnum2,
                    member,
                    hospital,
                    doctor,
                    others,
                    reappealDate,
                    ExGratifia,
                    appealStatus,
                    patientName1,
                    patientType1,
                    illnessCode1,
                    accreditationPeriod1,
                    dateReceived1,
                    dateAdmitted1,
                    dateDischarged1,
                    daysConfinement1,
                    CPDReasonForDenial1,
                    MRReasonForDenial1,
                    hospitalCode,
                    hospitalName,
                    hospitalCategory,
                    accreditationPeriod2,
                    dateReceived2,
                    dateAdmitted2,
                    dateDischarged2,
                    daysConfinement2,
                    CPDReasonForDenial2,
                    MRReasonForDenial2,
                    patientName2,
                    patientType2,
                    illnessCode2,
                    illnessCategory,
                    dateReceived3,
                    dateAdmitted3,
                    dateDischarged3,
                    daysConfinement3,
                    CPDReasonForDenial3,
                    MRReasonForDenial3,
                    appealsID
                ]
            )
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    deleteAppeals: async (req, res) => {
        try {
            const {
                appealsID
            } = req.params
            const [rows, fields] = await pool.query(
                "DELETE FROM " +
                "appealsTable " +
                "WHERE " +
                "appealsID = ?",
                [
                    appealsID
                ]
            )
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }
}

module.exports = postsController