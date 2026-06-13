import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Paymentsname = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { amount, frozenTime } = state || {
    amount: "0",
    frozenTime: "N/A",
  };

  const [loading, setLoading] = useState(false);

  const handleRecipientClick = (name, bank) => {
    setLoading(true);

    setTimeout(() => {
      navigate("/payment-receipt", {
        state: {
          recipientName: name,
          recipientBank: bank,
          amount,
          frozenTime,
        },
      });
    }, 6000);
  };

  return (
    <div className="bg-gray-100 min-h-screen relative">

      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
          <div className="w-12 h-12 border-4 border-[#f77e68] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="max-w-md mx-auto bg-white min-h-screen p-5">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-xl font-semibold"
          >
            ←
          </button>
          <p className="text-[#f77e68] font-medium cursor-pointer">
            Get help
          </p>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Send money
        </h1>

        {/* IBAN Input */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-3">
            Enter IBAN, Raast ID, account or name
          </p>
          <input
            type="text"
            placeholder="PK19SADA00000311XXXXXXX"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f77e68]"
          />
        </div>

        {/* Recipients Label */}
        <p className="text-sm font-semibold text-gray-400 tracking-wider mb-4">
          RECIPIENTS
        </p>

        {/* Recipients List */}
        <div className="space-y-5">
          <Recipient name="MUHAMMAD JAVAID" bank="Telenor Microfinance Bank (TMB) *9918" onClick={handleRecipientClick} />
          <Recipient name="MUHAMMAD ASIF" bank="Telenor Microfinance Bank (TMB) *5885" onClick={handleRecipientClick} />
          <Recipient name="ABDUL RASHID" bank="HBL *8303" onClick={handleRecipientClick} />
          <Recipient name="NAZEER ANJUM SHAHEEN" bank="Telenor Microfinance Bank (TMB) *5082" onClick={handleRecipientClick} />
          <Recipient name="REHMAT SHAH" bank="Telenor Microfinance Bank (TMB) *6734" onClick={handleRecipientClick} />
          <Recipient name="ABDUL RASHEED" bank="United Bank Limited (UBL) *9981" onClick={handleRecipientClick} />
          <Recipient name="ABDUL RASHEED" bank="Telenor Microfinance Bank (TMB) *4530" onClick={handleRecipientClick} />
          <Recipient name="CAFE GARDEN COLD CORNER" bank="Meezan Bank (MBL) *1376" onClick={handleRecipientClick} />
          <Recipient name="MUEIN UL DIN" bank="Mobilink Microfinance Bank (MMBL) *0479" onClick={handleRecipientClick} />
          <Recipient name="ABDUR RASHEED" bank="Mobilink Microfinance Bank (MMBL) *5426" onClick={handleRecipientClick} />
          <Recipient name="MOEEM UDDIN" bank="Telenor Microfinance Bank (TMB) *3863" onClick={handleRecipientClick} />
          <Recipient name="Quatta Chay Khana 2" bank="Mobilink Microfinance Bank (MMBL) *8328" onClick={handleRecipientClick} />
          <Recipient name="ABDUR RASHEED" bank="HBL *9601" onClick={handleRecipientClick} />
           <Recipient name="NEW QUAEETA REHMAT SHAH" bank="Mobilink Microfinance Bank (MMBL) *5442" onClick={handleRecipientClick} />
           <Recipient name="ZEESHAN MUSTAFFA" bank="Telenor Microfinance Bank (TMB) *6818" onClick={handleRecipientClick} />
          
        </div>
      </div>
    </div>
  );
};

const Recipient = ({ name, bank, onClick }) => {
  return (
    <div
      onClick={() => onClick(name, bank)}
      className="flex items-center space-x-4 cursor-pointer"
    >
      {/* Circle Avatar */}
      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
        {name.charAt(0)}
      </div>

      {/* Name & Bank */}
      <div>
        <p className="text-base font-semibold text-gray-800">
          {name}
        </p>
        <p className="text-sm text-gray-500">
          {bank}
        </p>
      </div>
    </div>
  );
};

export default Paymentsname;

